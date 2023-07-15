import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import StatusBar from './components/Statusbar/StatusBar';
import BonusBlock from './components/BonusBlock/BonusBlock';
import taskApi from './utils/TaskApi';
import { IBonus } from "./types/IBonus";
// import IBonusBlockProps from './types/IBonusBlockProps';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`;

function App() {
    const [token, setToken] = useState<string>('');
    const [bonus, setBonus] = useState<IBonus | null>();

    const createToken = () => {
        taskApi
            .createToken()
            .then((res: any) => setToken(res.accessToken))
            .catch((err: any) => console.error(err));
    };

    const getBonus = (token: string) => {
        taskApi
            .getBonus(token)
            .then((res: any) => setBonus(res.data))
            .catch((err: any) => console.error(err));
    };

    useEffect(() => {
        if (!token) {
            createToken();
        }
        if (token && !bonus) {
            getBonus(token);
        }
    }, [token, bonus]);

    return (
        <AppWrapper>
            <StatusBar />
            <Header />
            {bonus && <BonusBlock bonus={bonus} />}
        </AppWrapper>
    );
}

export default App;
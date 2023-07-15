import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Flex from '../Flex/Flex'
import moment from 'moment'

const Provider = styled.span`
margin-left: 3px;
`
const Percent = styled.span`
margin-right: 5px;
`
const BatteryPercentStyled = styled.progress`
    width: 23px;
    height: 10.015px;
    overflow: hidden;
    border-radius: 2px;
    padding: 1px;
    border: 1px solid;


    &::-webkit-progress-bar{
        background: white;
    }
  
    &::-webkit-progress-value{
        background: black;
    }
`


function StatusBar() {
    let timeNow = moment().format('LTS');
    const [timeOfMoment, setTimeOfMoment] = useState(timeNow);
    const [charging, setCharging] = useState(false);
    const [batteryPercent, setBatteryPercent] = useState('');
    const checkTime = () => {
        setTimeOfMoment(moment().format('LTS'));
    } 
    useEffect(() => {
		setInterval(checkTime, 1000);
	}, []);
    // @ts-ignore
    navigator.getBattery().then(function (battery) {
        function uppdateAllBatteryInfo() {
            updateChargeInfo();
            updateLevelInfo();
        }
        uppdateAllBatteryInfo();

        battery.addEventListener('chargingchange', updateChargeInfo);
        function updateChargeInfo() {
            if (battery.charging) {
                setCharging(true);
            } else setCharging(false);
        }

        battery.addEventListener('levelchange', updateLevelInfo);
        function updateLevelInfo() {
            setBatteryPercent(String(Math.floor(battery.level*100)));
        }
    })

    return (
        <Flex padding='4.5px 6px' width='96.8%' max='363px' fontFamily='Helvetica' fontSize='12px' line='15px'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="6" viewBox="0 0 34 6" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.75 5.5C4.26878 5.5 5.5 4.26878 5.5 2.75C5.5 1.23122 4.26878 0 2.75 0C1.23122 0 0 1.23122 0 2.75C0 4.26878 1.23122 5.5 2.75 5.5Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.75 5.5C11.2688 5.5 12.5 4.26878 12.5 2.75C12.5 1.23122 11.2688 0 9.75 0C8.23122 0 7 1.23122 7 2.75C7 4.26878 8.23122 5.5 9.75 5.5Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.75 5.5C18.2688 5.5 19.5 4.26878 19.5 2.75C19.5 1.23122 18.2688 0 16.75 0C15.2312 0 14 1.23122 14 2.75C14 4.26878 15.2312 5.5 16.75 5.5Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.75 5C24.9926 5 26 3.99264 26 2.75C26 1.50736 24.9926 0.5 23.75 0.5C22.5074 0.5 21.5 1.50736 21.5 2.75C21.5 3.99264 22.5074 5 23.75 5ZM23.75 5.5C22.2312 5.5 21 4.26878 21 2.75C21 1.23122 22.2312 0 23.75 0C25.2688 0 26.5 1.23122 26.5 2.75C26.5 4.26878 25.2688 5.5 23.75 5.5Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M30.75 5C31.9926 5 33 3.99264 33 2.75C33 1.50736 31.9926 0.5 30.75 0.5C29.5074 0.5 28.5 1.50736 28.5 2.75C28.5 3.99264 29.5074 5 30.75 5ZM30.75 5.5C29.2312 5.5 28 4.26878 28 2.75C28 1.23122 29.2312 0 30.75 0C32.2688 0 33.5 1.23122 33.5 2.75C33.5 4.26878 32.2688 5.5 30.75 5.5Z" fill="black"/>
                </svg>
                <Provider>Figma</Provider>
            </div>
            <p>{timeOfMoment}</p>
            <div>
                <Percent>{charging ? 'Power' : batteryPercent+'%'}</Percent>
                <BatteryPercentStyled
                        max={100}
                        value={batteryPercent}
                />
            </div>
        </Flex>
    );
}

export default StatusBar;
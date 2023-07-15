import React, {useState} from 'react';
import styled from 'styled-components';
import Flex from '../Flex/Flex';
import {IBonusBlockProps} from '../../types/IBonusBlockProps';

const BonusBlockStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 204px;
  min-height: 100%;
  max-width: 375px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  position: relative;

  &::before {
    z-index: -1;
    content: '';
    background: linear-gradient(180deg, #D2333E 0%, #F54B55 100%);
    position: absolute;
    height: 148px;;
    top: 56px;
    width: 100%;
  }
`
const BonusButton = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid red;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  align-self: center;
`
const BonusTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px
`
const BonusStatus = styled.div`
  color: #979797;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 8px;
`

const BonusBlock: React.FC<IBonusBlockProps> = ({bonus}) => {
    const [text, setText] = useState<string>('');

    let dateOfBurning = new Date(bonus.dateBurning);
    let monthOfBurning = dateOfBurning.getMonth() + 1;
    let dayOfBurning = dateOfBurning.getDate();
  // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || (window as object).webkitSpeechRecognition;
    const recognizer = new SpeechRecognition();
    recognizer.interimResults = true;
    recognizer.lang = 'ru-Ru';
    // @ts-ignore
    recognizer.onresult = function (event: SpeechRecognitionEvent) {
        let result = event.results[event.resultIndex];
        if (result.isFinal) {
            result[0].transcript.split(' ').map((item: string) => alert(item + ' ' + Math.floor(Math.random() * 9)));
            setText(result[0].transcript);
        } else {
            console.log(
                'Промежуточный результат: ',
                result[0].transcript.split(' ').at(-1) +
                ' ' +
                Math.floor(Math.random() * 10)
            );
        }
    };
    recognizer.start();

    return (
        <BonusBlockStyled>
            <Flex padding='18px 18px 19px 20px' width='79.2%' max='297px' radius='20px' line='150%'
                  shadow='2px 2px 16px 0px rgba(0, 0, 0, 0.20)'>
                <Flex direction='column' margin='0' width='auto'>
                    <BonusTitle>
                        {bonus.currentQuantity} бонусов
                    </BonusTitle>
                    <BonusStatus>
                        <span>
						{dayOfBurning >= 10 ? dayOfBurning : `0${dayOfBurning}`}.
                            {monthOfBurning >= 10 ? monthOfBurning : `0${monthOfBurning}`} сгорит
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                            <g clipPath="url(#clip0_1_48)">
                                <path
                                    d="M3.6533 11.4134C2.46742 9.43863 3.13318 5.24933 5.83783 3.80468C6.55744 3.52587 7.14003 2.97078 7.45967 2.25937C7.7793 1.54796 7.81029 0.737409 7.54592 0.00299072C7.54592 0.00299072 9.82304 1.54372 8.73182 5.10783C7.6406 8.67194 9.58585 9.24959 9.58585 9.24959C9.14308 8.67691 8.93882 7.951 9.01684 7.22731C9.07406 6.72254 9.23962 6.23667 9.50185 5.80388C9.76408 5.3711 10.1166 5.0019 10.5346 4.72239C9.72838 7.61169 13.001 9.05211 13.001 12.5001C13.001 15.948 9.3955 17.003 9.3955 17.003C9.39635 16.3675 9.25093 15.7405 8.97081 15.1721C8.69068 14.6037 8.28362 14.1096 7.78208 13.7293C6.07399 12.4768 6.64402 9.54002 6.64402 9.54002C4.4595 12.7662 5.55282 17.004 5.55282 17.004C5.55282 17.004 4.55626 15.608 3.60756 15.4633C2.65885 15.3186 2.13664 13.9701 2.13664 13.9701C2.15057 14.4998 2.29186 15.0181 2.54823 15.4797C2.8046 15.9413 3.16828 16.3323 3.60756 16.6186C-3.74597 13.1517 2.42166 7.99819 2.42166 7.99819C1.70909 10.7396 3.6533 11.4134 3.6533 11.4134Z"
                                    fill="url(#paint0_linear_1_48)"/>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_48" x1="6.99978" y1="6.00006" x2="6.99978"
                                                y2="17.0001" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FFB258"/>
                                    <stop offset="1" stopColor="#C71515"/>
                                </linearGradient>
                                <clipPath id="clip0_1_48">
                                    <rect width="13" height="17" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>
                        {bonus.forBurningQuantity} бонусов
                        </span>
                    </BonusStatus>
                </Flex>
                <BonusButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                        <g clipPath="url(#clip0_1_53)">
                            <path d="M0.771591 12.1948L6.2284 6.5" stroke="#D4343F" strokeLinecap="round"/>
                            <path d="M0.771595 0.805237L6.22841 6.5" stroke="#D4343F" strokeLinecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_53">
                                <rect width="7" height="13" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </BonusButton>
            </Flex>
            {text && <span>{text}</span>}
        </BonusBlockStyled>
    );
}

export default BonusBlock;
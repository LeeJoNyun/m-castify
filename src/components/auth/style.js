import styled from 'styled-components';

export const LoginStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    .modal {
        width: 310px;
        height: 452px;
        border-radius: 20px;
        background: #1a1a1a;
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        .inner {
            width: 270px;
            height: 392px;
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 20px;
            label {
                display: block;
                width: 250px;
                color: #fff;
                font-family: Pretendard;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-transform: uppercase;
            }
            input[type='text'] {
                width: 270px;
                height: 30px;
                border-radius: 4px;
                color: rgba(136, 136, 136, 0.7);
                border: 1px solid rgba(136, 136, 136, 0.53);
                background-color: #1a1a1a;
                color: #fff;
                font-size: 8px;
                font-weight: 500;
                box-sizing: border-box;
                padding-left: 10px;
                display: flex;
                align-items: center;
                &::placeholder {
                    color: rgba(136, 136, 136, 0.7);
                    font-size: 8px;
                    font-weight: 500;
                }
                &:focus {
                    outline: none;
                    border: 1px solid #fff;
                }
            }
            .logo {
                width: 100px;
                height: 54px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    height: 40px;
                    display: block;
                }
            }
            .email,
            .passwd {
                display: flex;
                flex-flow: column;
                gap: 12px;
                align-items: center;
            }
        }
    }
`;

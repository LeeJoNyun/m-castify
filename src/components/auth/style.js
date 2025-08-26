import styled from 'styled-components';

export const LoginStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    .close {
        width: 20px;
        height: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 20px;
    }
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
            gap: 40px;
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
            .input-area {
                width: 100%;
                height: 128px;
                display: flex;
                flex-flow: column;
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

                .email,
                .passwd {
                    display: flex;
                    flex-flow: column;
                    gap: 12px;
                    align-items: center;
                }
            }
            .login-btn {
                color: #fff;
                font-family: Pretendard;
                font-size: 12px;
                font-style: normal;
                font-weight: 600;
                line-height: 30px;
                text-transform: uppercase;
                width: 200px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                border: 1px solid #fff;
            }
            .nav {
                width: 201px;
                height: 80px;
                display: flex;
                flex-flow: column;
                gap: 20px;
                .links {
                    width: 193px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    li {
                        height: 100%;
                        color: #fff;
                        font-family: Pretendard;
                        font-size: 8px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 30px; /* 375% */
                        text-transform: uppercase;
                        &.center {
                            width: 81px;
                            text-align: center;
                            border-left: 2px solid #606060;
                            border-right: 2px solid #606060;
                        }
                    }
                }
                .sns {
                    width: 100%;
                    height: 80px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 40px;
                    i {
                        display: block;
                        width: 20px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
`;

export const JoinStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    .close {
        width: 20px;
        height: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 20px;
    }
    .modal {
        width: 310px;
        height: 478px;
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
        flex-flow: column;
        gap: 40px;
        .inner {
            width: 270px;
            height: 341px;
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 20px;
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
            .title {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                strong {
                    color: #fff;
                    font-family: Pretendard;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                }
                span {
                    color: #fff;
                    font-family: Pretendard;
                    font-size: 8px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }

            form {
                width: 250px;
                height: 220px;
                display: flex;
                flex-flow: column;
                gap: 20px;
                .birth {
                    width: 100%;
                    height: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: rgba(136, 136, 136, 0.7);
                    font-size: 8px;
                    font-weight: 500;
                    font-family: Pretendard;
                    gap: 12px;
                    select {
                        background-color: inherit;
                        border-radius: 4px;
                        border: 1px solid rgba(136, 136, 136, 0.53);
                        display: flex;
                        justify-content: space-between;
                        padding: 0 10px;
                        align-items: center;
                        height: 30px;
                        color: rgba(136, 136, 136, 0.7);
                        font-family: Pretendard;

                        font-size: 8px;
                        font-weight: 500;
                        appearance: none; /* 기본 화살표 제거 */
                        -webkit-appearance: none; /* 사파리, 크롬 */
                        -moz-appearance: none; /* 파이어폭스 */
                        background: #1a1a1a url('/login/mingcute_right-line.svg') no-repeat right
                            10px center; /* 화살표 이미지 */
                        /* outline: none; */
                    }
                    .year {
                        width: 75px;
                    }
                    .month {
                        width: 50px;
                    }
                    .day {
                        width: 50px;
                    }
                }
                input[type='text'] {
                    width: 250px;
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
            }
        }
        .join-btn {
            color: #fff;
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px;
            text-transform: uppercase;
            width: 200px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            border: 1px solid #fff;
        }
    }
`;

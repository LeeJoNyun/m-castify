import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    height: 10.1781vw;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    .inner {
        width: 349px;
        height: 8.1425vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
            width: 5.0891vw;
            height: 5.0891vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .logo {
            width: 22.9008vw;
            height: 8.0621vw;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`;

export const MenuStyle = styled.div`
    width: 100vw;
    height: 754px;
    position: fixed;
    top: 40px;
    left: 0;
    background-color: #1a1a1a;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 372px;
        height: 605px;
        display: flex;
        flex-flow: column;
        gap: 60px;
        background-color: #1a1a1a;
        gap: 60px;
        .menu1 {
            width: 372px;
            height: 118px;
            display: flex;
            flex-flow: column;
            gap: 14px;
            .title {
                color: #fff;
                text-align: center;
                font-family: Pretendard;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .link-area {
                width: 372px;
                height: 80px;
                display: flex;
                gap: 12px;
                align-items: center;
                justify-content: center;
                .apple {
                    background-color: black;
                    box-sizing: border-box;
                    width: 180px;
                    height: 80px;
                    border-radius: 10px;
                    position: relative;
                    span {
                        display: block;
                        color: #fff;
                        font-family: Pretendard;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        position: absolute;
                        left: 22px;
                        top: 31px;
                    }
                }
                .samsung {
                    box-sizing: border-box;
                    width: 184.615px;
                    height: 80px;
                    border-radius: 10px;
                    background-image: url('/images/menu/samsung.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    span {
                        display: block;
                        color: #fff;
                        font-family: Pretendard;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                        position: absolute;
                        left: 22px;
                        top: 31px;
                    }
                }
            }
        }
        .menu2 {
            width: 372px;
            height: 103px;
            display: flex;
            flex-flow: column;
            gap: 14px;
            .title {
                color: #fff;
                text-align: center;
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .link-area {
                width: 372px;
                height: 70px;
                display: flex;
                gap: 6px;
                align-items: center;
                justify-content: center;
                .area {
                    width: 120px;
                    height: 70px;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        color: #fff;
                        font-family: Inter;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                    }
                }
                .sports {
                    background-image: url('/images/menu/K1.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .content {
                    background-image: url('/images/menu/K2.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .art {
                    background-image: url('/images/menu/k3.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            }
        }
        .menu3 {
            width: 372px;
            height: 115px;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                width: 366px;
                height: 100%;
                border-radius: 10px;
                background: url('/images/menu/contents2.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 0 -37px;
                position: relative;
                span {
                    color: #fff;
                    text-align: center;
                    font-family: Pretendard;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    position: absolute;
                    left: 60px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        .menu4 {
            width: 372px;
            height: 89px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                width: 217px;
                height: 100%;
                background-image: url('/images/menu/left.png');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                span {
                    width: 74px;
                    height: 34px;
                    display: block;
                    color: #fff;
                    font-family: Pretendard;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: normal;
                    position: absolute;
                    left: 0;
                    top: 25px;
                }
            }
            .acc {
                width: 130.209px;
                height: 100%;
                background-image: url('/images/menu/header3.png');
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    display: block;
                    color: #fff;
                    font-family: Inter;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }
    }
`;

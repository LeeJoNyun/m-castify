import styled from 'styled-components';

export const Section1Style = styled.section`
    width: 100%;
    height: 1217px;
    position: relative;
    background: #1a1a1a;
    margin-bottom: 49px;
    .bg1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 503px;
        background-image: url('/images/main/section1/main_bg1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -37px 0;
    }
    .bg2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 393px;
        height: 393px;
        background: #1a1a1a;
        background-image: url('/images/main/section1/main_bg2.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
    }
    .bg_text {
        width: 37.4046vw;
        height: 151.8804vw;
        position: absolute;
        top: 112px;
        left: 18px;
        background-image: url('/images/main/section1/main_bgTxt.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
    }
`;

export const ContentStyle = styled.div`
    width: 89.0585vw;
    height: 195.9288vw;
    position: absolute;
    top: 425px;
    left: 28px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .title {
        color: rgba(255, 255, 255, 0.6);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 36px; /* 180% */
        width: 115px;
        height: 72px;
        display: block;
    }
`;

export const ItemListStyle = styled.ul`
    width: 130px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    li {
        width: 70px;
        height: 70px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .gsap-items {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        &.rangle {
            border-radius: 20px;
        }
        &.circle {
            border-radius: 50%;
        }
        &.orange {
            background-color: #ff5b37;
        }
        &.gray {
            background: #888;
        }
        &.btn {
            display: flex;
            justify-content: center;
            align-items: center;
            .more {
                width: 68px;
                height: 68px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #1a1a1a;
                border-radius: 100%;
                i {
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
`;

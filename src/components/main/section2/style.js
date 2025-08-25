import styled from 'styled-components';
export const Section2Style = styled.section`
    width: 100vw;
    height: 975px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    h3 {
        display: block;
        width: 100%;
        height: auto;
        color: rgba(255, 255, 255, 0.8);
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px; /* 100% */
        text-align: center;
    }
    .bg {
        width: 100%;
        height: 765px;
        background-image: url('/images/main/section2/bg1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .context {
        width: 370px;
        height: 100px;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 40px;
        span {
            display: block;
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
        }
        strong {
            display: block;
            color: #fff;
            text-align: center;
            font-family: Pretendard;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px; /* 100% */
        }
    }
    .more {
        margin-top: 30px;
        width: 105px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        border: 1px solid #fff;
        color: #fff;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100vw;
    height: 815.48px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 40px;
    .img {
        width: 100%;
        height: 471.48px;
        background-image: url('/images/footer/footer.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .context {
        padding-left: 40px;
        height: 248px;
        height: 144px;
        display: flex;
        flex-flow: column;
        gap: 20px;
        .spans {
            color: #e3e3e3;
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 166.667% */
            span {
                display: block;
            }
        }
        .privacy {
            display: flex;
            flex-flow: column;
            gap: 4px;
            span {
                color: rgba(255, 255, 255, 0.6);
                font-family: Pretendard;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 166.667% */
            }
            strong {
                color: #e3e3e3;
                font-family: Pretendard;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px; /* 166.667% */
            }
        }
    }
`;

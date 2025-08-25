import styled from 'styled-components';

export const KsportsStyle = styled.div`
    width: 725px;
    height: auto;
    margin: 0 auto;
    padding-top: 80px;
    background-color: #1a1a1a;
    .inner {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        span {
            font-size: 12px;
            font-style: italic;
        }
        h2 {
            font-size: 16px;
            margin-bottom: 30px;
        }
    }
    .banner {
        width: 395px;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        gap: 20px;
        margin-bottom: 60px;
        .img1 {
            width: 80px;
            height: 135px;
            border-radius: 40px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .img2 {
            width: 80px;
            height: 135px;
            border-radius: 40px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .img3 {
            width: 80px;
            height: 135px;
            border-radius: 40px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .banner-text {
        display: block;
        text-align: center;
        color: #fff;
        span {
            font-size: 10px;
            font-weight: 500;
        }
        h2 {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        p {
            line-height: 18px;
            font-size: 10px;
        }
    }
`;

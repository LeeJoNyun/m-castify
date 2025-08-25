import styled from 'styled-components';

export const Section1Style = styled.section`
    display: flex;
    position: relative;
    .text {
        color: #fff;
        margin-top: 31.8601vw;
        margin-left: 6.1069vw;
        strong {
            font-size: 1rem;
            font-weight: 600;
            line-height: 1.5;
            display: block;
            margin-bottom: 10.1781vw;
        }
        p {
            &:nth-of-type(1) {
                font-size: 0.625rem;
                margin-bottom: 5.0891vw;
            }
            &:nth-of-type(2) {
                font-size: 0.5rem;
            }
        }
    }
    .images {
        margin-top: 16.5394vw;
        .circle {
            border-radius: 100%;
            background: #fff;
            display: inline-block;
            overflow: hidden;
        }
        .circle1 {
            width: 43.7659vw;
            height: 43.7659vw;
            position: absolute;
            right: 5.0891vw;
            z-index: 2;
            img {
                width: 43.7659vw;
                height: 43.7659vw;
            }
        }
        .circle2 {
            width: 22.3919vw;
            height: 22.3919vw;
            position: absolute;
            right: 40.2036vw;
            z-index: 3;
            img {
                width: 22.3919vw;
                height: 22.3919vw;
            }
        }
        .circle3 {
            width: 22.3919vw;
            height: 22.3919vw;
            position: absolute;
            top: 48.3461vw;
            right: 35.6234vw;
            z-index: 1;
            img {
                width: 22.3919vw;
                height: 22.3919vw;
            }
        }
    }
`;

export const Section2Style = styled.section`
    margin-top: 12.7226vw;
    p {
        text-align: center;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 4.0712vw;

        span {
            color: #fff;
        }
    }
    ul {
        display: flex;
        gap: 5.0891vw;
        justify-content: center;
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-content: space-between;
            color: #fff;
            font-weight: 400;
            img {
                width: 16.5394vw;
            }
            span {
                font-size: 0.625rem;
                text-align: center;
            }
        }
    }
`;

export const Section3Style = styled.section``;

export const Section4Style = styled.section`
    width: 80.1527vw;
    margin: auto;
    .series {
        .series-text {
            p {
            }
        }
        .series-img {
            display: flex;
            border-radius: 10vw;
            height: 22.9008vw;
            li {
                width: 26.7176vw;
                span {
                    font-weight: 700;
                    font-size: 1rem;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    /* align-items: center; */
                }
            }
            .impact {
                background-image: url('../images/product/impact.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
            .bounce {
                background-image: url('../images/product/bounce.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
            .ring {
                background-image: url('../images/product/ring.png');
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    }
    .text {
        strong {
            &:nth-child(1) {
            }
            &:nth-child(2) {
            }
        }
    }
`;

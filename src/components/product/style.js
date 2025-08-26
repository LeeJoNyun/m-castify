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
            animation: floatY 3s ease-in-out infinite;
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
            animation: floatX 4s ease-in-out infinite;
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
            animation: floatY 5s ease-in-out infinite;
            img {
                width: 22.3919vw;
                height: 22.3919vw;
            }
        }
        @keyframes floatY {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-15px);
            }
            100% {
                transform: translateY(0px);
            }
        }

        @keyframes floatX {
            0% {
                transform: translateX(0px);
            }
            50% {
                transform: translateX(15px);
            }
            100% {
                transform: translateX(0px);
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

export const Section3Style = styled.section`
    .cate-search {
        text-align: center;
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 10.1781vw;
        margin-bottom: 7.6336vw;
    }
    .cate-wrap {
        margin-bottom: 10.1781vw;
        .first-cate {
            display: flex;
            gap: 3.5623vw;
            justify-content: center;
            margin-bottom: 5.6336vw;
            li {
                font-size: 0.625rem;
                font-weight: 700;
                gap: 3.5623vw;
                width: 26.9898vw;
                padding: 1.1267vw 0;
                box-sizing: border-box;
                color: #fff;
                border: 1px solid #fff;
                text-align: center;
                border-radius: 1.0178vw;
                cursor: pointer;

                &.active {
                    background: #fff;
                    color: #000;
                }

                &:hover {
                    background: rgba(255, 255, 255, 0.1);

                    &.active {
                        background: rgba(255, 255, 255, 0.9);
                    }
                }
            }
        }

        .second-cate {
            display: flex;
            gap: 3.5623vw;
            margin-left: 6.1069vw;
            li {
                font-size: 0.75rem;
                color: rgba(136, 136, 136, 0.53);
                padding: 0.2178vw 2.5445vw;
                box-sizing: border-box;
                border: 1px solid rgba(136, 136, 136, 0.53);
                border-radius: 3.125rem;
                cursor: pointer;

                &.active {
                    color: #fff;
                    border-color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                }

                &:hover {
                    color: rgba(255, 255, 255, 0.8);
                    border-color: rgba(255, 255, 255, 0.8);

                    &.active {
                        background: rgba(255, 255, 255, 0.2);
                    }
                }
            }
        }
    }
    .product-list {
        width: 80.1527vw;
        margin: auto;
        .product-wrap {
            .title {
                color: #fff;
                display: flex;
                align-items: center;
                margin-bottom: 5.0891vw;
                h3 {
                    font-size: 1.25rem;
                    margin-right: 5.0891vw;
                }
                span {
                    font-size: 0.65rem;
                    transform: translateY(0.125rem);
                }
            }
            .phone {
                display: flex;
                gap: 6.1069vw;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: 10.6336vw;
                .product {
                    width: 15.2672vw;
                    .img-bg {
                        background: #fff;
                        overflow: hidden;
                        border-radius: 0.375rem;
                        img {
                            width: 15.2672vw;
                        }
                    }
                    .text {
                        font-size: 0.5rem;
                        color: #fff;
                        /* height: 8.6514vw; */
                        height: 1.25rem;
                        margin-top: 2.0534vw;
                        h4 {
                            /* height: 2.0356vw; */
                            height: 1.25rem;
                            font-weight: 500;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;

                            /* overflow: hidden; */
                            text-overflow: ellipsis;
                            white-space: normal;
                            margin-bottom: 1.25vw;
                        }
                        span {
                            font-weight: 400;
                        }
                    }
                }
            }
            button {
                color: #fff;
                border: 1px solid #fff;
                box-sizing: border-box;
                font-size: 0.5rem;
                text-align: center;
                display: block;
                width: 26.4631vw;
                background: #1a1a1a;
                border-radius: 12.7226vw;
                margin: auto;
                margin-top: 7.6336vw;
                margin-bottom: 10.1781vw;
            }
        }
    }
`;

export const Section4Style = styled.section`
    width: 80.1527vw;
    margin: auto;
    .series {
        .series-text {
            p {
                font-size: 0.875rem;
                font-weight: 600;
                color: #fff;
                text-align: center;
                margin-bottom: 5.0891vw;
            }
        }
        .series-img {
            display: flex;
            border-radius: 1.25vw;
            height: 22.9008vw;
            overflow: hidden;

            li {
                width: 26.7176vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                span {
                    font-weight: 700;
                    font-size: 1rem;
                    color: #fff;
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

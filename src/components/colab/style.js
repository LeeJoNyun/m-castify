import styled from 'styled-components';

export const Section1Style = styled.section`
    .visual-wrap {
        .visual-image {
            width: 100vw;
            background-image: url('../images/colab/치이카와1.jpg');
            background-repeat: no-repeat;
            img {
                width: 100%;
            }
        }
        .text {
            position: absolute;
            top: 16.9014vh;
            color: #fff !important;
            padding: 0 9.9237vw;
            box-sizing: border-box;
            /* transform: translateY(30px); */
            transform: translateY(7.6336vw);
            h2 {
                font-weight: 700;
                font-size: 1.25rem;
                margin-bottom: 0;
            }
            p {
                font-size: 0.625rem;
                font-weight: 600;
            }
        }
    }
    .product-wrap {
        display: flex;
        gap: 6.1069vw;
        justify-content: center;
        margin-bottom: 5.3474vh;
        transform: translateY(-5.6336vw);
        li {
            width: 15.2672vw;
            .img-bg {
                /* height: 10.7981vh; */
                height: 23.4097vw;
                background: #fff;
                border-radius: 1.5267vw;
                overflow: hidden;
                img {
                    width: 23.4097vw;
                    height: 23.4097vw;
                    transform: translateX(-4vw);
                }
            }
            .text {
                color: #fff;
                /* height: 2.3474vh; */
                height: 5.0891vw;
                font-size: 0.5rem;
                padding: 1.4085vh 1.0178vw;
                box-sizing: border-box;
                text-overflow: ellipsis;
                white-space: nowrap;
                h4 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: normal;

                    margin-bottom: 0.4695vh;
                }

                span {
                }
            }
        }
    }
    button {
        border: 1px solid #fff;
        border-radius: 3.125rem;
        font-size: 0.5rem;
        padding: 0.4695vh 7.6336vw;
        background: #1a1a1a;
        color: #fff;
        display: block;
        margin: 0 auto;
        margin-bottom: 4.6948vh;
    }
`;

export const Section2Style = styled.section`
    div {
        h4 {
            font-size: 0.625rem;
            color: #fff;
            text-align: center;
            font-weight: 600;
            margin-bottom: 1.1737vh;
        }
        p {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.875rem;
            text-align: center;
            font-weight: 700;
            margin-bottom: 2vh;
            span {
                color: #fff;
            }
        }

        .cate {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 2.3474vh 1.5267vw;
            padding: 3.4351vw;
            box-sizing: border-box;
            li {
                width: 45.8015vw;
                height: 12.7226vw;
                border-radius: 5.0891vw;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 0.875rem;
                font-weight: 500;
                text-align: center;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: cover;
                &:nth-child(1) {
                    background-image: url('../images/colab/animation.png');
                }
                &:nth-child(2) {
                    background-image: url('../images/colab/art.png');
                }
                &:nth-child(3) {
                    background-image: url('../images/colab/characters.png');
                }
                &:nth-child(4) {
                    background-image: url('../images/colab/movies.png');
                }
                &:nth-child(5) {
                    background-image: url('../images/colab/fashion.png');
                }
                &:nth-child(6) {
                    background-image: url('../images/colab/sports.png');
                }
            }
        }
    }
`;

export const Section3Style = styled.section`
    width: 93.1298vw;
    /* height: 10.5634vh; */
    height: 22.9008vw;
    background: #fff;
    border-radius: 0.625rem;
    overflow: hidden;
    margin: auto;
    margin-top: 7.0423vh;

    .colab-all {
        display: flex;
        height: 22.9008vw;
        .more {
            width: 50%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            color: #fff;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            h4 {
                font-size: 1rem;
                font-weight: 600;
            }
            p {
                font-size: 0.5rem;
            }
        }
        .colab-archieve {
            background-image: url('../images/colab/chillguy.jpg');
        }
        .next-up {
            width: 50%;
            background-image: url('../images/colab/Teletubbies.jpg');
        }
    }
`;

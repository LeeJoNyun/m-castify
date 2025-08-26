import styled from 'styled-components';

export const ColabStyle = styled.section`
    background: #1a1a1a;
    width: 100%;
    /* max-width: 430px; */
    .visual-wrap {
        .visual-image {
            width: 100vw;
            background-image: url('../images/colab/chiikawa.png');
        }
        .text {
            position: absolute;
            top: 16.9014vh;
            h2 {
                font-weight: 700;
                font-size: 1.25rem;
                color: #fff !important;
            }
            p {
            }
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
            background: #f00;
            border-radius: 5.0891vw;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 0.875rem;
            font-weight: 500;
            text-align: center;
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
`;

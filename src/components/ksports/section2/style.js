import styled from 'styled-components';

export const Section2Style = styled.div`
    .category-header {
        width: 315px;
        margin: 0 auto;
        margin-top: 60px;
        margin-bottom: 20px;
        p {
            color: #fff;
            font-size: 14px;
        }
    }
    .product-item {
        width: 315px;
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 0 auto;
        row-gap: 20px;
        margin-bottom: 30px;
    }
    .toggle-button {
        display: block;
        margin: 10px auto;
        padding: 4px 30px;
        background: none;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 12px;
        cursor: pointer;
        font-size: 8px;
    }
`;
export const ListItemStyle = styled.div`
    .img-bg {
        width: 3.125vw; /* 60px -> 3.125vw */
        height: 4.792vw; /* 92px -> 4.792vw */
        min-width: 60px; /* 최소 크기 */
        min-height: 92px; /* 최소 크기 */
        background-color: #fff;
        border-radius: 0.313vw; /* 6px -> 0.313vw */
        margin-bottom: 12px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        color: #fff;
        .name {
            width: 3.125vw; /* 60px -> 3.125vw */
            min-width: 60px; /* 최소 크기 */
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.5rem; /* 8px -> 0.5rem */
            font-weight: 500;
            margin-bottom: 4px;
        }
        .price {
            display: block;
            font-size: 0.5rem; /* 8px -> 0.5rem */
        }
    }
`;

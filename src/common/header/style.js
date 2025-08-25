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
    background: rgba(161, 161, 161, 0.2);
    .inner {
        width: 89.8219vw;
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

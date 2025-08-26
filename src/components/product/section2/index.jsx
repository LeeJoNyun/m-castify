import React from 'react';
import { Section2Style } from '../style';

const Section2 = () => {
    return (
        <Section2Style>
            <p>
                기기는 같아도 <span>스타일은 달라야 하니까.</span>
            </p>
            <ul>
                <li>
                    <img src="../images/product/apple.png" alt="Apple" />
                    <span>Apple</span>
                </li>
                <li>
                    <img src="../images/product/samsung.png" alt="Samsung" />
                    <span>Samsung</span>
                </li>
                <li>
                    <img src="../images/product/custom.png" alt="Custom" />
                    <span>Custom</span>
                </li>
                <li>
                    <img src="../images/product/acc.png" alt="Acc" />
                    <span>ACC</span>
                </li>
            </ul>
        </Section2Style>
    );
};

export default Section2;

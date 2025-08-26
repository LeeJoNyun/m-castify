import React from 'react';
import { Section1Style } from '../style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="text">
                <strong>
                    취향을 담는
                    <br />
                    가장 간단한 방법
                </strong>
                <p>복잡하게 고민하지 마세요.</p>
                <p>
                    당신의 취향을 그대로 담아낸,
                    <br />
                    가장 손쉬운 선택입니다.
                </p>
            </div>
            <div className="images">
                <div className="circle circle1">
                    <img src="../images/product/product_visual_1.png" alt="visual1" />
                </div>
                <div className="circle circle2">
                    <img src="../images/product/product_visual_2.png" alt="visual2" />
                </div>
                <div className="circle circle3">
                    <img src="../images/product/product_visual_3.png" alt="visual3" />
                </div>
            </div>
        </Section1Style>
    );
};

export default Section1;

import React from 'react';
import { Section4Style } from '../style';

const Section4 = () => {
    return (
        <Section4Style>
            <div className="series">
                <div className="series-text">
                    <p>대표 시리즈 한눈에 보기</p>
                </div>
                <ul className="series-img">
                    <li className="impact">
                        <span>Impact</span>
                    </li>
                    <li className="bounce">
                        <span>Bounce</span>
                    </li>
                    <li className="ring">
                        <span>Ring</span>
                    </li>
                </ul>
            </div>
            <div className="text">
                <strong>No right answer.</strong>
                <strong>Just your own way.</strong>
            </div>
        </Section4Style>
    );
};

export default Section4;

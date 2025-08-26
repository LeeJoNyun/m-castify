import React from 'react';
import { Section1Style } from './style';

const section1 = () => {
    return (
        <Section1Style>
            <div className="inner">
                <span>K - SPORTS</span>
                <h2>KBO x 케이스티파이</h2>
            </div>
            <div className="banner">
                <div className="img1">
                    <img src="/images/ksports/Ksp_1.jpg" alt="" />
                </div>
                <div className="img2">
                    <img src="/images/ksports/Ksp_2.jpg" alt="" />
                </div>
                <div className="img3">
                    <img src="/images/ksports/Ksp_3.jpg" alt="" />
                </div>
            </div>
            <div className="banner-text">
                <span>KBO x 케이스티파이가 만났다</span>
                <h2>"팬심을 스타일로 표현하는 법"</h2>
                <p>
                    응원하는 팀의 상징을 손안에 담을 수 있습니다.
                    <br />
                    <br />
                    프로야구 10개 구단의 정체성을 그대로 담은 디자인으로
                    <br />
                    유니폼과 로고로 디자인된 케이스로 팬심을 표현해보세요.
                </p>
            </div>
        </Section1Style>
    );
};

export default section1;

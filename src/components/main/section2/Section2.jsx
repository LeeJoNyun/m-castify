import { Section2Style } from './style';

const Section2 = () => {
    return (
        <Section2Style>
            <h3>간단한 커스터마이징으로</h3>
            <div className="bg"></div>
            <div className="context">
                <div className="spans">
                    <span>사진, 텍스트, 색상을 자유롭게 조합해 단 한 개뿐인</span>
                    <span>튼튼한 내구성과 세련된 스타일을 동시에 갖춘 케이스로,</span>
                </div>
                <strong>일상 속에서 나를 표현해 보세요.</strong>
            </div>
            <div className="more">MORE</div>
        </Section2Style>
    );
};

export default Section2;

import { Section1Style } from './style';
import Content from './Content';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="bg1"></div>
            <div className="bg2"></div>
            <Content />
            <div className="bg_text"></div>
        </Section1Style>
    );
};

export default Section1;

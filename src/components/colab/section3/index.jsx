import { Section3Style } from "../style";

const Section3 = () => {
    return (
        <Section3Style>
            <div>
                <div className="colab-all">
                    <div className="more colab-archieve">
                        <h4>CoLab Archieve</h4>
                        <p>지난 콜라보를 둘러보세요</p>
                    </div>
                    <div className="more next-up">
                        <h4>Next Up</h4>
                        <p>다가올 콜라보를 미리 엿보세요</p>
                    </div>
                </div>
            </div>
        </Section3Style>
    );
};

export default Section3;

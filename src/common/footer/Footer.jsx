import { FooterStyle } from './style';

const Footer = () => {
    return (
        <FooterStyle>
            <div className="img"></div>
            <div className="context">
                <div className="spans">
                    <span>사업자등록번호 : 580-88-02026 </span>
                    <span>통신판매업 신고번호 : 제 2021-서울강남-03049 호</span>
                    <span>상호 : 케이스티파이: 케이스타그램 리미티드</span>
                    <span>대표 : 응푸이순 웨슬리 (Wesley Ng)</span>
                </div>
                <div className="privacy">
                    <span>개인정보 처리방침 | 약관</span>
                    <strong>Copyright © 2025 CASETiFY </strong>
                </div>
            </div>
        </FooterStyle>
    );
};

export default Footer;

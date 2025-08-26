import { useDispatch, useSelector } from 'react-redux';
import { headerActions } from '../../store/modules/headerSlice';
import { JoinStyle } from './style';

const Join = () => {
    const { joinPopup } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    return (
        <JoinStyle>
            <div className="modal">
                <div className="inner">
                    <i
                        className="close"
                        onClick={() => {
                            dispatch(headerActions.setJoinPopup());
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                        >
                            <path
                                d="M15 15L7.5 7.5M15 15L22.5 22.5M15 15L22.5 7.5M15 15L7.5 22.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </i>
                    <h2 className="logo">
                        <img src="/logo.png" alt="" />
                    </h2>
                    <div className="title">
                        <strong>회원가입</strong>
                        <span>가입을 통해 다양한 서비스를 만나보세요</span>
                    </div>
                    <form>
                        <input type="text" name="" id="" placeholder="이메일 입력" />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="비밀번호 입력 ( 문자, 숫자, 특수문자 포함 8 ~ 20자 )"
                        />
                        <input type="text" name="" id="" placeholder="비밀번호 재입력" />
                        <div className="birth">
                            <span>생년월일</span>
                            <select className="year" name="year">
                                <option value="">년도</option>
                            </select>

                            <select className="month" name="month">
                                <option value="">월</option>
                            </select>
                            <select className="day" name="day">
                                <option value="">일</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="휴대폰  번호 입력 ( ‘-’제외 11자리 입력 )"
                        />
                    </form>
                </div>
                <span className="join-btn">회원가입</span>
            </div>
        </JoinStyle>
    );
};

export default Join;

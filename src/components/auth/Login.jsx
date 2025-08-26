import { LoginStyle } from './style';

const Login = () => {
    return (
        <LoginStyle>
            <div className="modal">
                <div className="inner">
                    <h2 className="logo">
                        <img src="/logo.png" alt="" />
                    </h2>

                    <div className="email">
                        <label htmlFor="">이메일</label>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                    <div className="passwd">
                        <label htmlFor="">비밀번호</label>
                        <input type="text" placeholder="입력해주세요" />
                    </div>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;

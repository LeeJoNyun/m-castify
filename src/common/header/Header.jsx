import { useDispatch, useSelector } from 'react-redux';
import { HeaderStyle } from './style';
import Menu from './Menu';
import { headerActions } from '../../store/modules/headerSlice';
import { useEffect, useState } from 'react';
import Login from '../../components/auth/Login';
import Join from '../../components/auth/Join';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { menuState, loginPopup, joinPopup } = useSelector((state) => state.header);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickGnb = () => {
        dispatch(headerActions.setMenuState());
    };
    const clickLogo = () => {
        if (menuState) {
            dispatch(headerActions.closeMenu());
        }
        navigate('/');
    };
    useEffect(() => {
        if (menuState) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuState]);
    return (
        <>
            <HeaderStyle>
                <div className="inner">
                    <i className="gnb" onClick={clickGnb}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                        >
                            <path
                                d="M0.888892 11.1582C0.63704 11.1582 0.426077 11.0702 0.256003 10.8942C0.0859291 10.7182 0.000595658 10.5006 3.06513e-06 10.2415C-0.000589527 9.98241 0.0847439 9.76486 0.256003 9.58886C0.427262 9.41286 0.638225 9.32486 0.888892 9.32486H15.1111C15.363 9.32486 15.5742 9.41286 15.7449 9.58886C15.9156 9.76486 16.0006 9.98241 16 10.2415C15.9994 10.5006 15.9141 10.7185 15.744 10.8951C15.5739 11.0717 15.363 11.1594 15.1111 11.1582H0.888892ZM0.888892 6.57486C0.63704 6.57486 0.426077 6.48686 0.256003 6.31086C0.0859291 6.13486 0.000595658 5.91731 3.06513e-06 5.6582C-0.000589527 5.39909 0.0847439 5.18153 0.256003 5.00553C0.427262 4.82953 0.638225 4.74153 0.888892 4.74153H15.1111C15.363 4.74153 15.5742 4.82953 15.7449 5.00553C15.9156 5.18153 16.0006 5.39909 16 5.6582C15.9994 5.91731 15.9141 6.13517 15.744 6.31178C15.5739 6.48839 15.363 6.57609 15.1111 6.57486H0.888892ZM0.888892 1.99153C0.63704 1.99153 0.426077 1.90353 0.256003 1.72753C0.0859291 1.55153 0.000595658 1.33398 3.06513e-06 1.07487C-0.000589527 0.815758 0.0847439 0.598203 0.256003 0.422203C0.427262 0.246203 0.638225 0.158203 0.888892 0.158203H15.1111C15.363 0.158203 15.5742 0.246203 15.7449 0.422203C15.9156 0.598203 16.0006 0.815758 16 1.07487C15.9994 1.33398 15.9141 1.55184 15.744 1.72845C15.5739 1.90506 15.363 1.99276 15.1111 1.99153H0.888892Z"
                                fill="white"
                            />
                        </svg>
                    </i>

                    <h2 className="logo" onClick={clickLogo}>
                        <img src="/logo.png" alt="" />
                    </h2>
                    <i
                        className="mypage"
                        onClick={() => {
                            dispatch(headerActions.setLoginPopup());
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M10 10.1582C12.21 10.1582 14 8.3682 14 6.1582C14 3.9482 12.21 2.1582 10 2.1582C7.79 2.1582 6 3.9482 6 6.1582C6 8.3682 7.79 10.1582 10 10.1582ZM10 12.1582C7.33 12.1582 2 13.4982 2 16.1582V18.1582H18V16.1582C18 13.4982 12.67 12.1582 10 12.1582Z"
                                fill="white"
                            />
                        </svg>
                    </i>
                </div>
            </HeaderStyle>
            {menuState && <Menu />}
            {loginPopup && <Login />}
            {joinPopup && <Join />}
        </>
    );
};

export default Header;

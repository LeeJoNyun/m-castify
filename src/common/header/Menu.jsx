import { useNavigate } from 'react-router-dom';
import { MenuStyle } from './style';
import { headerActions } from '../../store/modules/headerSlice';
import { useDispatch } from 'react-redux';

const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigatePage = (target) => {
        dispatch(headerActions.clickMenu());
        navigate(target);
    };
    return (
        <MenuStyle>
            <ul className="inner">
                <li className="menu1">
                    <h3 className="title">case</h3>
                    <div className="link-area">
                        <div className="apple">
                            <span>Apple</span>
                            <img
                                src="/images/menu/header1.png"
                                alt=""
                                style={{
                                    width: 80,
                                    height: 80,
                                    position: 'absolute',
                                    right: 19,
                                }}
                            />
                        </div>
                        <div className="samsung">
                            <span>Samsung</span>
                        </div>
                    </div>
                </li>
                <li className="menu2">
                    <h3 className="title">K-Content Lineup</h3>
                    <div className="link-area">
                        <div
                            className="area sports"
                            onClick={() => {
                                navigatePage('/ksports');
                            }}
                        >
                            <span>K - Sports</span>
                        </div>
                        <div className="area content">
                            <span>K - Content</span>
                        </div>
                        <div className="area art">
                            <span>K - Art</span>
                        </div>
                    </div>
                </li>
                <li className="menu3">
                    <div
                        onClick={() => {
                            navigatePage('/colab');
                        }}
                    >
                        <span>Co-Lab</span>
                    </div>
                </li>
                <li className="menu4">
                    <div className="left">
                        <span>충격으로부터 안전하게</span>
                    </div>
                    <div className="acc">
                        <span>ACC</span>
                    </div>
                </li>
            </ul>
        </MenuStyle>
    );
};

export default Menu;

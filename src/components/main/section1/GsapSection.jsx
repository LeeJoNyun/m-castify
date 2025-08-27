import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import { ItemListStyle } from './style';
import { useNavigate } from 'react-router-dom';

const GsapSection = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const items = document.querySelectorAll('li .gsap-items');
        gsap.fromTo(
            items,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: items[0],
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);
    return (
        <ItemListStyle ref={containerRef}>
            <li className="rangle">
                <img className="gsap-items" src="/images/main/section1/1.png" alt="" />
            </li>
            <li className="circle orange">
                <img className="gsap-items" src="/images/main/section1/2.webp" alt="" />
            </li>
            <li className="circle">
                <img className="gsap-items" src="/images/main/section1/3.jpg" alt="" />
            </li>
            <li className="circle">
                <img className="gsap-items" src="/images/main/section1/4.webp" alt="" />
            </li>
            <li className="rangle gray">
                <img className="gsap-items" src="/images/main/section1/5.webp" alt="" />
            </li>
            <li className="rangle">
                <img className="gsap-items" src="/images/main/section1/6.webp" alt="" />
            </li>
            <li className="circle">
                <img className="gsap-items" src="/images/main/section1/7.png" alt="" />
            </li>
            <li
                className="circle btn"
                onClick={() => {
                    navigate('/product');
                }}
            >
                <div className="more">
                    <i>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="20"
                            viewBox="0 0 23 20"
                            fill="none"
                        >
                            <path
                                d="M19.1119 9.06271H1.6875C1.43886 9.06271 1.2004 9.16148 1.02459 9.3373C0.848772 9.51311 0.75 9.75157 0.75 10.0002C0.75 10.2488 0.848772 10.4873 1.02459 10.6631C1.2004 10.8389 1.43886 10.9377 1.6875 10.9377H19.1119L12.2737 17.774C12.0977 17.95 11.9988 18.1888 11.9988 18.4377C11.9988 18.6867 12.0977 18.9254 12.2737 19.1015C12.4498 19.2775 12.6885 19.3764 12.9375 19.3764C13.1865 19.3764 13.4252 19.2775 13.6012 19.1015L22.0387 10.664C22.1261 10.5769 22.1953 10.4734 22.2426 10.3595C22.2898 10.2456 22.3142 10.1235 22.3142 10.0002C22.3142 9.87689 22.2898 9.75479 22.2426 9.64089C22.1953 9.527 22.1261 9.42354 22.0387 9.33646L13.6012 0.898957C13.4252 0.72292 13.1865 0.624023 12.9375 0.624023C12.6885 0.624023 12.4498 0.72292 12.2737 0.898957C12.0977 1.07499 11.9988 1.31375 11.9988 1.56271C11.9988 1.81166 12.0977 2.05042 12.2737 2.22646L19.1119 9.06271Z"
                                fill="white"
                            />
                        </svg>
                    </i>
                </div>
            </li>
        </ItemListStyle>
    );
};

export default GsapSection;

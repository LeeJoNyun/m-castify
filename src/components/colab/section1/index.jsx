import { Section1Style } from '../style';
import visualData from '../../../assets/colabVisualData';
import ProductData from '../../../assets/colabProductData';
import { useEffect } from 'react';

const Section1 = () => {
    const { title, desc, img } = visualData[0];
    const product = ProductData[0].product;

    // useEffect(() => {
    //     const textElement = document.querySelector('.visual-wrap .text');
    //     const productWrapElement = document.querySelector('.product-wrap');

    //     const timer1 = setTimeout(() => {
    //         if (textElement) {
    //             textElement.classList.add('fade-in');
    //         }
    //     }, 300);

    //     const timer2 = setTimeout(() => {
    //         if (productWrapElement) {
    //             productWrapElement.classList.add('fade-in');
    //         }
    //     }, 600);

    //     // 클린업
    //     return () => {
    //         clearTimeout(timer1);
    //         clearTimeout(timer2);
    //     };
    // }, []);

    return (
        <Section1Style>
            <div className="visual-wrap">
                <div className="visual-image">
                    <img src={img} alt={title} />
                </div>
            </div>
            <div className="product-wrap">
                <div className="title-text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <ul>
                    {product.map((item, idx) => (
                        <li key={idx}>
                            <div className="img-bg">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="text">
                                <h4>{item.name}</h4>
                                <span> ₩{item.price.toLocaleString()}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button>VIEW MORE</button>
        </Section1Style>
    );
};

export default Section1;

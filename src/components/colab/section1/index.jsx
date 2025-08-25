import { Section1Style } from '../style';
import visualData from '../../../assets/colabVisualData';
import ProductData from '../../../assets/colabProductData';

const Section1 = () => {
    const { title, desc, img } = visualData[0];
    const product = ProductData[0].product;
    return (
        <Section1Style>
            <div className="visual-wrap">
                <div className="visual-image">
                    <img src={img} alt={title} />
                </div>
                <div className="text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <ul className="product-wrap">
                {product.map((item, idx) => (
                    <li>
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
            <button>VIEW MORE</button>
        </Section1Style>
    );
};

export default Section1;

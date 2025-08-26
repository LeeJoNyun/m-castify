import { Section3Style } from '../style';
import productData from '../../../assets/productData';
import { useState } from 'react';

const Section3 = () => {
    const [activeMainCategory, setActiveMainCategory] = useState('K-CONTENTS');
    const [activeSubCategory, setActiveSubCategory] = useState('SPORTS');

    const categoryData = {
        'K-CONTENTS': ['KBO', '오징어게임', '국립중앙박물관'],
        'CO-LAB': ['Animation   ', 'art', 'characters', 'movies', 'sports'],
        SERIES: ['바운스', '임팩트', '링', '미러'],
    };

    const handleMainCategoryClick = (category) => {
        setActiveMainCategory(category);
        // 새로운 카테고리 선택하면 첫 번째 서브 카테고리 기본 선택
        setActiveSubCategory(categoryData[category][0]);
    };

    const handleSubCategoryClick = (subCategory) => {
        setActiveSubCategory(subCategory);
    };

    return (
        <Section3Style>
            <p className="cate-search">다양한 카테고리를 통해 빠르게 제품을 찾아보세요</p>
            <div className="cate-wrap">
                <ul className="first-cate">
                    {Object.keys(categoryData).map((category) => (
                        <li
                            key={category}
                            className={activeMainCategory === category ? 'active' : ''}
                            onClick={() => handleMainCategoryClick(category)}
                        >
                            {category === 'K-CONTENTS'
                                ? 'K - contents'
                                : category === 'CO-LAB'
                                ? 'Co-Lab'
                                : 'SERIES'}
                        </li>
                    ))}
                </ul>

                <ul className="second-cate">
                    {categoryData[activeMainCategory].map((subCategory) => (
                        <li
                            key={subCategory}
                            className={activeSubCategory === subCategory ? 'active' : ''}
                            onClick={() => handleSubCategoryClick(subCategory)}
                        >
                            {subCategory}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="product-list">
                <div className="product-wrap samsung-wrap">
                    <div className="title">
                        <h3>Samsung</h3>
                        <span>삼성</span>
                    </div>
                    <ul className="phone samsung-phone">
                        {productData[1].product.map((item, idx) => (
                            <li className="product samsung-product" key={idx}>
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
                </div>
                <div className="product-wrap apple-wrap">
                    <div className="title">
                        <h3>Apple</h3>
                        <span>애플</span>
                    </div>
                    <ul className="phone apple-phone">
                        {productData[0].product.map((item, idx) => (
                            <li className="product apple-product" key={idx}>
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
                </div>
            </div>
        </Section3Style>
    );
};

export default Section3;

import { Section2Style } from './style';
import KsportsData from '../../../assets/k-pages/KsportsData';
import ListItem from './listitem';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Section2 = () => {
    const [expanded, setExpanded] = useState({});

    const toggleCategory = (categoryId) => {
        setExpanded((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    return (
        <Section2Style>
            {KsportsData.map((category) => {
                const visibleItems = expanded[category.id]
                    ? category.data
                    : category.data.slice(0, 8);
                return (
                    <div key={category.id} className="category-block">
                        <div className="category-header">
                            <p>{category.strong}</p>
                        </div>

                        <div className="category-content">
                            <Link>
                                <ul className="product-item">
                                    {visibleItems.map((item) => (
                                        <ListItem
                                            key={item.id}
                                            data={item}
                                            parentId={category.id}
                                        />
                                    ))}
                                </ul>
                            </Link>
                            <button
                                className="toggle-button"
                                onClick={() => toggleCategory(category.id)}
                            >
                                {expanded[category.id] ? 'View Less' : 'View More'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </Section2Style>
    );
};

export default Section2;

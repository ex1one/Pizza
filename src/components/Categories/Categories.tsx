import React, { useState } from 'react';

const Categories = () => {
  const [active, setActive] = useState(0);
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            className={active === index ? 'active' : ''}
            onClick={() => setActive(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

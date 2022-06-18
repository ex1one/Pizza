import React, { useState } from 'react';
import styles from './categories.module.scss';

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
    <div className={styles.categories}>
      <ul>
        {categories.map((item, index) => (
          <li onClick={() => setActive(index)} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

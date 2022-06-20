import React, { useState } from 'react';
import Arrow from '../../../public/img/Arrow.svg';

const Sort = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const itemList = ['Популярности', 'Цене', 'Алфавиту'];

  const open = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <Arrow className={activeMenu ? 'arrow__active' : ''} />
        <b>Сортировка по:</b>
        <span onClick={open}>популярности</span>
      </div>
      {activeMenu && (
        <div className="sort__popup">
          <ul>
            {itemList.map((item, index) => (
              <li onClick={() => setSelectedMenu(index)} className={selectedMenu === index ? 'active' : ''}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

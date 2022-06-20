import React, { useState } from 'react';
import Arrow from '../../../public/img/Arrow.svg';

const Sort = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const itemList = ['Популярности', 'Цене', 'Алфавиту'];

  const open = () => {
    setActiveMenu((prev) => !prev);
  };

  const clickHandler = (index: number) => {
    setSelectedMenu(index);
    setActiveMenu(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <Arrow className={activeMenu ? 'arrow__active' : ''} />
        <b>Сортировка по:</b>
        <span onClick={open}>{itemList[selectedMenu]}</span>
      </div>
      {activeMenu && (
        <div className="sort__popup">
          <ul>
            {itemList.map((item, index) => (
              <li onClick={() => clickHandler(index)} className={selectedMenu === index ? 'active' : ''}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

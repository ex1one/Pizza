import React, { useState } from 'react';
import Arrow from '../../../public/img/Arrow.svg';

const Sort = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const open = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        {/* <img src={Arrow} alt="" /> */}
        <Arrow />
        <b>Сортировка по:</b>
        <span onClick={open}>популярности</span>
      </div>
      {activeMenu && (
        <div className="sort__popup">
          <ul>
            <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

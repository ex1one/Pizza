import React from 'react';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Header from './components/Header/Header';
import '../public/styles/app.scss';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';

const App = () => (
  <div>
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={300} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;

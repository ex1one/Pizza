import React, { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Header from './components/Header/Header';
import '../public/styles/app.scss';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import fetchPizza from './api/pizza';
import { IPizza } from './api/pizza/types';

const App = () => {
  const [pizza, setPizza] = useState<IPizza[] | null>(null);

  useEffect(() => {
    fetchPizza.then(({ data }) => setPizza(data));
  }, []);

  return (
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
              {pizza && pizza.map((item) => (
                <PizzaBlock
                  imageUrl={item.imageUrl}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  types={item.types}
                  sizes={item.sizes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

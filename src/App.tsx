import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Header from './components/Header/Header';
import '../public/styles/app.scss';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import pizzaState from './store/atoms/Pizza';
import fetchPizza from './api/pizza';
import Skeleton from './components/Skeleton/Skeleton';

const App = () => {
  const [pizza, setPizza] = useRecoilState(pizzaState);

  useEffect(() => {
    setTimeout(() => {
      fetchPizza.then(({ data }) => setPizza(data));
    }, 1000);
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
              {pizza ? pizza.map((item) => (
                <PizzaBlock
                  imageUrl={item.imageUrl}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  types={item.types}
                  sizes={item.sizes}
                />
              )) : <Skeleton value={3} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

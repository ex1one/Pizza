import { selector } from 'recoil';
import fetchPizza from '../../api/pizza';

const pizzaSelector = selector({
  key: 'pizzaSelector',
  get: async () => {
    const { data } = await fetchPizza;
    return data;
  },
});

export default pizzaSelector;

import { atom } from 'recoil';
import { IPizza } from '../../api/pizza/types';

const pizzaState = atom<IPizza[] | null>({
  key: 'Pizza',
  default: null,
});

export default pizzaState;

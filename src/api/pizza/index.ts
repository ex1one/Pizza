import instance from '../instance';
import { IPizza } from './types';

const fetchPizza = instance.get<IPizza[]>('/pizza');

export default fetchPizza;

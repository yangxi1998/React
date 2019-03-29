import {createStore} from 'redux';
import reducer from './reducer'
let store=createStore(reducer);  //只需写一遍，将来所有的内容从这里找
export default store;
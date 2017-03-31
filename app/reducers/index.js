import {combineReducers} from 'redux';
import memberReducers from './reducer-candidates';

const allReducers = combineReducers({
  candidates: memberReducers
});

export default allReducers;

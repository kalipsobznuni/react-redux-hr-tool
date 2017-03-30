import {combineReducers} from 'redux';
import memberReducers from './reducer-members';

const allReducers = combineReducers({
  members: memberReducers
});

export default allReducers;

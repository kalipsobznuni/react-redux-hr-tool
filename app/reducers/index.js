import {combineReducers} from 'redux';
import memberReducers from './reducer-candidates';
import interviewQuestionsReducer from './interviewQuestions-reducer';

const allReducers = combineReducers({
  candidates: memberReducers,
  questions: interviewQuestionsReducer,
});

export default allReducers;

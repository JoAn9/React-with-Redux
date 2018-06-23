import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  // the same as: courses: courses
  authors,
});

export default rootReducer;

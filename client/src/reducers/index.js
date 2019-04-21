import { combineReducers } from 'redux'
import headerReducer from './headerReducer';
import homePageReducer from './homePageReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  home: homePageReducer
})

export default rootReducer;

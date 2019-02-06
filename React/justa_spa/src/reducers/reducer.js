import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';

const rootReducer = combineReducers({api});
  
export default rootReducer;

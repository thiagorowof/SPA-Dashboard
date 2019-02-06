import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducer";
import thunk from 'redux-thunk';
import { setAxiosConfig, readEndpoint } from 'redux-json-api';


const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(setAxiosConfig({
    baseURL: 'http://localhost:3000/API',
    headers: {
        'Authorization': 'bearer' + Math.random(),
        "Pragma": 'no-cache',
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    }
  }));

store.dispatch(readEndpoint('data.json'));


export default store;
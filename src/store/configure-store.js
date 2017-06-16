import rootReducer from '../reducers/index';
import {createStore, compose} from 'redux';

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};

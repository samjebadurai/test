import { createStore, combineReducers } from 'redux';
import placeReducer from '../reducers/placereducer'
import homeReducer from '../reducers/homereducer'

const rootReducer = combineReducers({
  places: placeReducer,
  home: homeReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
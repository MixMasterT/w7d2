import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  store.dispatch((dispatch) => {
  console.log('If this prints out, the thunk middleware is working!');
});
  return store;
};



export default configureStore;

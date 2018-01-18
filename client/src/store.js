import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import CounterReducer from './reducers/counter';

const HeaderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION':
      console.log('header reducer action')
      return state
    default:
      return state
  }
}

export default createStore(
  combineReducers({
    header: HeaderReducer,
    counter: CounterReducer
  }),
  compose( applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
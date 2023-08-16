import { createStore, combineReducers, applyMiddleware } from 'redux'
import { usersReducer } from './reducers/usersReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  users: usersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
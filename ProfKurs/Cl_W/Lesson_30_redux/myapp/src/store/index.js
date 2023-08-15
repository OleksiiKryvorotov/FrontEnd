import { createStore, combineReducers } from 'redux';
import { usersReducer  } from './reducers/userReducer';

const rootReducer = combineReducers({
    users: usersReducer
});

export const store = createStore(rootReducer);
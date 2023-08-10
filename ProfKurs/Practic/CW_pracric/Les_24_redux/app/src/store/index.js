import { combineReducers, createStore } from 'redux'
import { accountReducer } from './reducer/accountReducer'
import { wordsReducer } from './reducer/wordsReducer'

const rootReducer = combineReducers({
    account: accountReducer,
    words: wordsReducer
})

export const store = createStore(rootReducer)
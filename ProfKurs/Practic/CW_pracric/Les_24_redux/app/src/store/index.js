import { createStore } from 'redux'
import { accountReducer } from './reducer/accountReducer'



export const store = createStore(accountReducer)
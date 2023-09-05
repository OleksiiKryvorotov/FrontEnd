import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { allProductsReducer } from './reducers/allProductsReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allProducts: allProductsReducer    
});
  
export const store = createStore(rootReducer, applyMiddleware(thunk));
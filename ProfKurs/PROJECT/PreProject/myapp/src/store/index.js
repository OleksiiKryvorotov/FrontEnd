import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer} from './reducers/categoriesReducer'
import thunk from 'redux-thunk';
import { productsByCategoryReducer } from './reducers/productsBycategoryReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer

});
  
export const store = createStore(rootReducer, applyMiddleware(thunk));
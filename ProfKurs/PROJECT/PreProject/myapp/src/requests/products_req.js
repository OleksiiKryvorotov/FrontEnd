import { loadProductsByCategoryAction } from "../store/reducers/productsBycategoryReducer"


export const getProductsByCategory = category => {
    return dispatch => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(json => dispatch(loadProductsByCategoryAction(json)))
    }
  }


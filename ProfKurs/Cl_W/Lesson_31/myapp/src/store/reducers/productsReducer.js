import { products_data } from "../../data/products_data"

const DELETE_CARD = 'DELETE_CARD';
const CHANGE_COLOR = 'CHANGE_COLOR';

export const deleteCardAction = payload => ({ type: DELETE_CARD, payload })
export const changeColordAction = payload => ({ type: CHANGE_COLOR, payload })

export const productsReducer = (state = products_data, action) => {
  if(action.type === DELETE_CARD){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === CHANGE_COLOR) {
    const target_card = state.find(el => el.id === action.payload);
    target_card.clicked = !target_card.clicked
    return [...state]
  } else {
    return state
  }
}
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNTT';
const CLEAR_CART = 'CLEAR_CART';

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteFromCartAction = payload => ({ type: DELETE_FROM_CART, payload });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT , payload });
export const clearCartAction = payload => ({ type: CLEAR_CART });

// Если продукта нет в корзине, то мы берем action.payload, добавляем к нему count: 1 и измененный объект добавляем в состояние

// Если продукт есть в корзине, то мы обращаемся к свойству count этого продукта и увеличиваем значение на 1

const checkProduct = (state, payload) => {
  const productInCart = state.find(el => el.id === payload.id);
  if(!productInCart){ // !productInCart (false) --- productInCart === undefined
    return [...state, {...payload, count: 1}]
  } else {
    productInCart.count++
    return [...state]
  }
}

export const cartReducer = (state=[], action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if (action.type === DELETE_FROM_CART) {
    return state.filter(el => el.id !== action.payload)  

// Инкремент:
    // 1. Найти элемент в стаэйте по айди
    // 2. У найденного элемента обращаемся к свойству count и увеличиваем его на 1
    // 3. Возвращаем обновленное состояние:
  } else if(action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  //----------------------------------

// Декремент
  // 1. Найти элемент в стаэйте по айди
  // 2. У найденного элемента проверяем значение свойства count:
    // если count === 1, то удаляем элемент из массива
    // если count !== 1, то уменьшаем его значение на 1
  // 3. Возвращаем обновленное состояние 

  } else if(action.type === DECREMENT_COUNT){
    const product = state.find(el => el.id === action.payload);
    if(product.count === 1){
      return state.filter(el => el.id !== product.id)
    } else {
      product.count--
      return [...state]
    } 
  //--------------------------------------------  
  // Удалить все продукты в корзине (кнопка)
  } else if(action.type === CLEAR_CART) {
    return [] 
  //-----------------------------------------------      
  } else {
  return [...state]
  }
}




const ADD_USER = 'ADD_USER'
// ADD_USER- название ACTION
const DELETE_USER = 'DELETE_USER'

export const addUserAction = new_user => ({ type: ADD_USER, payload: new_user });
// type: ADD_USER - тип ACTION!

// если название аргумента playload
// совпадает с  playload, тогда можно записать короче: 
// export const addUserAction = payload => ({ type: ADD_USER, payload})

export const deleteUserAction = id => ({ type: DELETE_USER, payload: id });



export const usersReducer = (state = [], action) => {
  if(action.type === ADD_USER){
    return [...state, action.payload]
  } else if(action.type === DELETE_USER){
    return state.filter(el => el.id !== action.payload)
  }
  return state
}
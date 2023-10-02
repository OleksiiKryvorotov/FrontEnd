const LOAD_USERS = 'LOAD_USERS';
const ADD_NEW_USER = 'ADD_NEW_USER';

export const loadUsersAction = payload => ({ type: LOAD_USERS, payload });
export const addNewUserAction = payload => ({ type: ADD_NEW_USER, payload });

export const usersReducer = (state=[], action) => {
  if(action.type === LOAD_USERS){
    return action.payload
  } else if(action.type === ADD_NEW_USER) {
    
  } else {
    return state
  }
}
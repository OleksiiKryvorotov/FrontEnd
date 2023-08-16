const LOAD_ALL_USERS = 'LOAD_ALL_USERS';

export const loadAllUsersAction = payload => ({ type: LOAD_ALL_USERS, payload });

export const usersReducer = (state = [], action) => {
  if(action.type === LOAD_ALL_USERS){
    return action.payload
  } else {
    return state
  }
}


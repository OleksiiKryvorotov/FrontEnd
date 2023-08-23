const LOAD_SINGLE_POST = 'LOAD_SINGLE_POST';

export const loadSinglePostAction = payload => ({ type: LOAD_SINGLE_POST, payload });

export const singlePostReducer = (state = {}, action) => {
  if(action.type === LOAD_SINGLE_POST){
    return action.payload
  } else {
    return state
  }
}
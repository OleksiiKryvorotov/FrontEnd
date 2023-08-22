const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';

export const loadAllPostsAction = payload => ({ type: LOAD_ALL_POSTS, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT, payload });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });

export const postsReducer = (state=[], action) => {
  if(action.type === LOAD_ALL_POSTS){
    return action.payload
  } else if(action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).reactions++
    return [...state]
  } else if(action.type === DECREMENT_COUNT){
    // state.find(el => el.id === action.payload).reactions--

    const target_post = state.find(el => el.id === action.payload);

    if(target_post.reactions === 0){
      target_post.reactions = 0
    } else {
      target_post.reactions--
    }

    return [...state]
  } else {
    return state
  }
}
 
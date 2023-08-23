import { loadAllPostsAction } from "../store/reducers/postsReducer"
import { loadSinglePostAction } from "../store/reducers/singlePostReducer"

export const getAllPosts = dispatch => {
  fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => dispatch(loadAllPostsAction(json.posts)))
}

export const getSinglePost = id => {
  return dispatch => {
  fetch(`https://dummyjson.com/posts/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadSinglePostAction(json)))
  }
}
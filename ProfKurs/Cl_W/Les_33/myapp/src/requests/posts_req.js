import { loadAllPostsAction } from "../store/reducers/postsReducer"

export const getAllPosts = callback => {
  fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => callback(loadAllPostsAction(json.posts)))
}
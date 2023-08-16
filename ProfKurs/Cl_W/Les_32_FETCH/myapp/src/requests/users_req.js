import { loadAllUsersAction } from "../store/reducers/usersReducer"

export const getAllUsers = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => dispatch(loadAllUsersAction(json)))
}
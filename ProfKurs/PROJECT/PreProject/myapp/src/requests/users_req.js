import { loadUsersAction } from "../store/reducers/usersReducer"

export const getAllUsers = (dispatch) => {
  fetch('https://api.escuelajs.co/api/v1/users')
    .then(res => res.json())
    .then(json => dispatch(loadUsersAction(json)))
}

export const addNewUserAction = new_user => {
    fetch('https://api.escuelajs.co/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(new_user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
    })
    .then(res => res.json())
    .then(json => console.log(json))
}
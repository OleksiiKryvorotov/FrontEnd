import React from 'react'
import { deleteUserAction } from '../../store/reducers/usersReducer'
import { useDispatch } from 'react-redux'

export default function UserCard({ id, name, age }) {

  const dispatch = useDispatch();

  return (
    <div>
      <p>Name: { name }</p>
      <p>Age: { age }</p>
      <p onClick={() => dispatch(deleteUserAction(id))}>X</p>
    </div>
  )
}

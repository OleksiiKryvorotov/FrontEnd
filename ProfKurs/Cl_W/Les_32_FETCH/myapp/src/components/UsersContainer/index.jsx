import React, { useEffect } from 'react'
import { getAllUsers } from '../../requests/users_req'
import { useDispatch } from 'react-redux';

export default function UsersContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers)
  }, []);  
  

  return (
    <div>UsersContainer</div>
  )
}
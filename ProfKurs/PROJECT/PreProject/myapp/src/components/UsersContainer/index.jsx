import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard'

export default function UsersContainer() {

    const users_state = useSelector(state => state.users)

  return (
    <div>{
        users_state.map(el => <UserCard key={el.id} {...el} />)
    }
    </div>
  )
}

import React from 'react'
import { users } from '../data/users_data'
import User from './User'

export default function UsersContainer() {
  return (
    <div>
      <p>Users:</p>
      <div>
        {
          users
            // .filter(el => el.salary > 1000)
            .map(el => <User key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}

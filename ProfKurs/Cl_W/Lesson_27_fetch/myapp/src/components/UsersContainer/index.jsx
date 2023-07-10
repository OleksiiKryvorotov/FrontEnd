import React, { useState, useEffect } from 'react'
import { getUsers } from '../../requests/users'

export default function  UsersContainer () {

    const [ users, setUsers ] = useState([])

// вызов ф-ции один раз! Без этого будет вызываться бесконечно и нагрузка на сервер:
    useEffect(() => getUsers(setUsers), [])  
//----------------------------------------      

    console.log(users);

  return (
    <div>

    </div>
  )
}

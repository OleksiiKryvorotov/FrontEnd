import React from 'react'

export default function AddUserForm() {

    const submit = e => {
        e.preventDefault()
        const { name, role, email } = e.target;
        const new_user = {
          email: 'example@gmail.com',
          name: name.value,
          password: 'qwerty1234',
          role: role.value,
          avatar: 'https://i.imgur.com/zQwsC2m.jpeg'
        }
        e.target.reset()
      }   
    
  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Email' name='email' />
      <input type='text' placeholder='Role' name='role' />
      <button>Add new user</button>
    </form>
  )
}


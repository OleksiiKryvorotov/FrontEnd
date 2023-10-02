import React from 'react'

export default function UserCard({name, role}) {
  return (
    <div>
        <p>Name: { name }</p>
        <p>Role: { role }</p>
    </div>
  )
}

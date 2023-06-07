import React from 'react'

export default function Student({ id, firstname, lastname, age, major, avg_grade, delete_student }) {
  return (
    <div onClick={() => delete_student(id)}>
      <p>Name: {firstname} {lastname}</p>
      <p>Age: {age}</p>
      <p>Major: {major}</p>
      <p>Grage: {avg_grade}</p>
    </div>
  )
}
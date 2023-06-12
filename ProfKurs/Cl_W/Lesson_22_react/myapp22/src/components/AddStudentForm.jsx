import React from 'react'

export default function AddStudentForm({ add_student }) {

  const handleSubmit = event => {
    event.preventDefault();
    const { firstname, lastname, age, major, grade } = event.target;
    const new_student = {
      id: Date.now(),
      firstname: firstname.value,
      lastname: lastname.value,
      age: +age.value,
      major: major.value,
      avg_grade: +grade.value
    }
    add_student(new_student);
    event.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='First name' name='firstname' />
      <input type='text' placeholder='Last name' name='lastname' />
      <input type='text' placeholder='Age' name='age' />
      <input type='text' placeholder='Major' name='major' />
      <input type='text' placeholder='Grade' name='grade' />
      <button>Add student</button>
    </form>
  )
}
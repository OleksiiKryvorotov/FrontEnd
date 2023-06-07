// Для задач 1-2:
// import React from 'react'
// import Student from './Student'
// import { students_data } from '../data/students_data'


// export default function StudentsContainer() {

    
//   return (
        
//      <div>
//         {
//             // отрисовываем карточки из массива:
//           students_data.map(el => <Student key={el.id} {...el} />)
//         }
//      </div>    
//   )
// }


// Для задач 3-6:
// 3. Создать состояние students(+setStudents)
// 4. Поместить в изначальное состояние students массив students_data
// 5. Отрисовать карточки студентов из состояния students

import React, { useState } from 'react'
import { students_data } from '../data/students_data'
import Student from './Student'

export default function StudentsContainer() {

  const [ students, setStudents ] = useState(students_data);

  const delete_student = id => setStudents(students.filter(el => el.id !== id));

  const add_student = new_student => setStudents([...students, new_student]);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='First name' name='firstname' />
        <input type='text' placeholder='Last name' name='lastname' />
        <input type='text' placeholder='Age' name='age' />
        <input type='text' placeholder='Major' name='major' />
        <input type='text' placeholder='Grade' name='grade' />
        <button>Add student</button>
      </form>

      <div>
        {
          students.map(el => <Student key={el.id} {...el} delete_student={delete_student} />)
        }
      </div>
    </div>
  )
}
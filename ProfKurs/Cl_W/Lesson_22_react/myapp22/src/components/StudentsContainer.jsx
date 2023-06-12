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

import React from 'react'
import Student from './Student'

export default function StudentsContainer({ students, delete_student}) {  

  return (
    <div>   
      <div>
        {
          students.map(el => <Student key={el.id} {...el} delete_student={delete_student} />)
        }
      </div>
    </div>
  )
}
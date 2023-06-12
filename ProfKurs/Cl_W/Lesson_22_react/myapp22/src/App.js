import { useState } from 'react'
import './App.css';
import AddStudentForm from './components/AddStudentForm';
import StudentsContainer from './components/StudentsContainer';
import { students_data } from './data/students_data';


function App() {
  const [ students, setStudents ] = useState(students_data);

  const delete_student = id => setStudents(students.filter(el => el.id !== id));

  const add_student = new_student => setStudents([...students, new_student]);
  return (
    <div>
      <AddStudentForm add_student={add_student} />
      <StudentsContainer students={students} delete_student={delete_student} />
    </div>
  );
}

export default App;

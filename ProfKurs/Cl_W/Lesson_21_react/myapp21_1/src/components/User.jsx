import React from 'react'
import TasksContainer from './TasksContainer'

export default function User({ firstName, lastName, age, salary, tasks }) {
  return (
    <div>
      <p>Name: {firstName} {lastName}</p>
      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
      <TasksContainer tasks={tasks} />
    </div>
  )
}


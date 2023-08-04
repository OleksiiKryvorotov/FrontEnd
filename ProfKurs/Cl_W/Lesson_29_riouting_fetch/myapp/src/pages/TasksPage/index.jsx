import React from 'react'
import WeekDaysContainer from '../../components/WeekDaysContainer'
import AddTaskForm from '../../components/AddTaskForm'

export default function TasksPage() {
  return (
    <div>
      <AddTaskForm />
      <WeekDaysContainer />
    </div>
  )
}

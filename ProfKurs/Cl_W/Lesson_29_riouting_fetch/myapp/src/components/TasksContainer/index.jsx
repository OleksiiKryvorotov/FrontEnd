import React from 'react'
import TaskItem from '../TaskItem'

export default function TasksContainer({ tasks, day_id }) {
  return (
    <div>
      {
        tasks.map(el => <TaskItem key={el.id} {...el} day_id={day_id} />)
      }
    </div>
  )
}
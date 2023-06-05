import React from 'react'
import TaskItem from './TaskItem'

export default function TasksContainer({ tasks }) {
  return (
    <div>
      <p>Tasks:</p>
      <div>
        {
          tasks.map(el => <TaskItem key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}



import React, { useContext, useState } from 'react'
import { Context } from '../../context'

export default function TaskItem({ id, task, day_id, completed }) {

  const [ taskDone, setTaskDone ] = useState(completed)

  const toggleTask = () => setTaskDone(!taskDone)

  const { deleteTask } = useContext(Context);

  const task_style = {
    color: taskDone ? 'green' : 'red',
    textDecoration: taskDone ? 'line-through' : ''
  }

  return (
    <div>
      <p
        style={task_style}
        onClick={() => toggleTask()}
         >
          { task }
          </p>
      <span
        onClick={() => deleteTask(day_id, id)}
      >X</span>
    </div>
  )
}

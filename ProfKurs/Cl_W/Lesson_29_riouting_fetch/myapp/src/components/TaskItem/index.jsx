import React, { useContext } from 'react'
import { Context } from '../../context'

export default function TaskItem({ id, task, day_id }) {

  const { deleteTask } = useContext(Context);

  return (
    <div>
      <p>{ task }</p>
      <span
        onClick={() => deleteTask(day_id, id)}
      >X</span>
    </div>
  )
}

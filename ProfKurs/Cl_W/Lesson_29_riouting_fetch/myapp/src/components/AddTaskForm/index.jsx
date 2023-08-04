import React, { useContext } from 'react'
import { Context } from '../../context'

export default function AddTaskForm() {
    const { addTask } = useContext(Context)

    const submit = e => {
        e.preventDefault();
        const { task, day } = e.target;
        const new_task = {
          id: Date.now(),
          task: task.value,
          completed: false
        }
       addTask(new_task, day.value);
      
        e.target.reset()
      }
      
  return (
    <form onSubmit={submit}>
    <input type='text' placeholder='Tasks' name='task' />
    <select name='day'>
      <option value='Monday'>Monday</option>
      <option value='Tuesday'>Tuesday</option>
      <option value='Wednesday'>Wednesday</option>
      <option value='Thursday'>Thursday</option>
      <option value='Friday'>Friday</option>
      <option value='Saturday'>Saturday</option>
      <option value='Sunday'>Sunday</option>
    </select>
    <button>Add task</button>
  </form>
  )
}

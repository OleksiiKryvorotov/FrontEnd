import React from 'react'
import { add_todo } from '../../store/slice/todoSlice';
import { useDispatch } from 'react-redux';

export default function AddTodoForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const new_task = {
      id: Date.now(),
      title: e.target.task.value,
      completed: false
    }
    dispatch(add_todo(new_task));
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Task' name='task' />
      <button>Add task</button>
    </form>
  )
}
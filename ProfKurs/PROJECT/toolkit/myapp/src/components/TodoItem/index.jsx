import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { change_status, delete_todo } from '../../store/slice/todoSlice';

export default function TodoItem({ id, title, completed }) {

  const dispatch = useDispatch();

  const status = completed ? 'done' : 'not done';

  const styles = {
    backgroundColor: completed ? 'lightgreen' : ''
  }

  const delete_item = (e) => {
    dispatch(delete_todo(id));
    e.stopPropagation()
  }

  return (
    <div 
      className={s.task_card}
      style={styles}
      onClick={() => dispatch(change_status(id))}
    >
      <span onClick={delete_item}>
        X
      </span>
      <p>Task: { title }</p>
      <p>Status: { status }</p>
    </div>
  )
}

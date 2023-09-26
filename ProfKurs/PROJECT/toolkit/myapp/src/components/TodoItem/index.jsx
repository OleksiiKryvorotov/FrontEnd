import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { delete_todo } from '../../store/slice/todoSlice'

export default function TodoItem({ id, title, completed}) {

    const dispatch = useDispatch()

    const status = completed ? 'done' : 'not done'
  return (
    <div className={s.task_card}>
        <span onClick={() => dispatch(delete_todo(id))}>
            X
            </span>
        <p>Task: { title }</p>
        <p>Status: { status }</p>
    </div>
  )
}

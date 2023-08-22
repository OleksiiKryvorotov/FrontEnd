import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAction,changeCheckboxAction } from '../../store/reducer/tasksReducer'
import s from './style.module.css'

export default function TaskInUserItem({id, title, userId}) {

    const dispatch = useDispatch()
  return (
    <div className={s.item}>
        <input
           onChange={event => dispatch(changeCheckboxAction(userId, event.target.checked))}
           type="checkbox" />
        <p>{title}</p>
        <button onClick={() => dispatch(removeAction(id))}>X</button>
    </div>
  )
}

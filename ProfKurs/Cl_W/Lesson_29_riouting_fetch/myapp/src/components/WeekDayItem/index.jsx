import React from 'react'
import s from './index.module.css'
import TasksContainer from '../TasksContainer'

export default function WeekDayItem({ id, title, tasks }) {
  return (
    <div className={s.item}>
      <p>{ title }</p>
      <TasksContainer tasks={tasks} day_id={id} />
    </div>
  )
}

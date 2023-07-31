import React, { useContext } from 'react'
import { Context } from '../../context'
import WeekDayItem from '../WeekDayItem';
import s from './index.module.css'

export default function WeekDaysContainer() {

  const { weekDays } = useContext(Context);

  return (
    <div className={s.container}>
      {
        weekDays.map(el => <WeekDayItem key={el.id} {...el} />)
      }
    </div>
  )
}

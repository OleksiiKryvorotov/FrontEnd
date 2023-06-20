import React from 'react'
import TriggerBtn from '../TriggerBtn'
import s from './index.module.css'

export default function TriggersContainer() {
  return (
    <div className={s.container}>
      <TriggerBtn text='RUS' />
      <TriggerBtn text='ENG' />
    </div>
  )
}

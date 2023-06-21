import React from 'react'
import s from './index.module.css'
import TriggerBtn from '../TriggerBtn'

export default function TriggersContainer({ change_to_rus, change_to_eng }) {
  return (
    <div className={s.container}>
      <TriggerBtn text='RUS' click={change_to_rus} />
      <TriggerBtn text='ENG' click={change_to_eng} />
    </div>
  )
}

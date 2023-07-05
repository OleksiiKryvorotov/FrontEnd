import React, { useContext } from 'react'
import s from './index.module.css'
import TriggerBtn from '../TriggerBtn'
import { Context } from '../../conrext'

export default function TriggersContainer() {

  const { change_to_rus, change_to_eng } = useContext(Context)
  return (
    <div className={s.container}>
      <TriggerBtn text='RUS' click={change_to_rus} />
      <TriggerBtn text='ENG' click={change_to_eng} />
    </div>
  )
}

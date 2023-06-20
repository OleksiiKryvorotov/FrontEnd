import React from 'react'
import s from './index.module.css'

export default function TriggerBtn ({text}) {

  const styles = {
    backgroundColor: text === 'RUS' ? 'green' : 'blue'
  }

  return (
    <div className={s.trigger_btn} style={styles}>
      {text}
    </div>
  )
}

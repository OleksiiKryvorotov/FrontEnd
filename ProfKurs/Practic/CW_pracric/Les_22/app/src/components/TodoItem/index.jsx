import React from 'react'
import s from './style.module.css'

export default function TodoItem
({id, title, important, remove, done }) {

  const backgroundColor = important ? 'red': 'green'

  return (
    <div className={s.item} style={{backgroundColor}}>
        <p className={done ? s.done : ''}>{title}</p>
        <button onClick={() => remove(id)}>Удалить</button>
    </div>
  )
}

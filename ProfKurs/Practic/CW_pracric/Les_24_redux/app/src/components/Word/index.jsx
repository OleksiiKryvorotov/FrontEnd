import React from 'react'
import s from'./style.module.css'
import { useDispatch } from 'react-redux'
import { removeAction } from '../../store/reducer/wordsReducer'

export default function Word({id, value}) {
  const dispatch =useDispatch()
  
  return (
    <div className={s.word}>
        <p>{value}</p>
        <button onClick={() => dispatch(removeAction(id))}>Удалить</button>
    </div>
  )
}

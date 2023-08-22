import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWordsAction } from '../../store/reducer/wordsReducer'

export default function WordItem({id, title}) {

    const dispatch = useDispatch()
  return (
    <div>
        <p>{title}</p>
        <button onClick={() => dispatch(removeWordsAction(id))}>Удалить</button>
    </div>
  )
}

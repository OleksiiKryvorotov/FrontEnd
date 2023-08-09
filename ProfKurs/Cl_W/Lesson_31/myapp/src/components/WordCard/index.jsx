import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { changeLangAction, deleteWordAction } from '../../store/reducer/wordsReducer'

export default function WordCard({id, rus, eng, lang}) {

    const word = lang === 'rus' ? rus : eng

    const dispatch = useDispatch()
    
    const deleteWord = e => {
       dispatch(deleteWordAction(id))
        e.stopPropagation()
    } 
    
  return (
    <div
       className={s.word_card}
       onClick={() => dispatch(changeLangAction(id))}
       >
        <p>{ word }</p>
        <p onClick={deleteWord}>X</p>
    </div>
  )
}

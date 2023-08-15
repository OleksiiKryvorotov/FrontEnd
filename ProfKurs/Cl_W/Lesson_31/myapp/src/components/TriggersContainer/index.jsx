import React from 'react'
import { useDispatch } from 'react-redux'
import { changeToEngAction, changeToRusAction } from '../../store/reducers/wordsReducer';
import s from './index.module.css'

export default function TriggersContainer() {

  const dispatch = useDispatch();

  return (
    <div className={s.triggers}>
      <div onClick={() => dispatch(changeToRusAction())}>RUS</div>
      <div onClick={() => dispatch(changeToEngAction())}>ENG</div>
    </div>
  )
}

import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/tasksReducer'

export default function AddTask() {

    const dispatch = useDispatch()

   
    const onSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value         
        dispatch(addAction(title));
        event.target.reset()
    }

  return (
   <form onSubmit={onSubmit}className={s.form}>
       <input type='text' name='title' placeholder='title'/>
       <button>Длбавить</button>
   </form>
  )
}

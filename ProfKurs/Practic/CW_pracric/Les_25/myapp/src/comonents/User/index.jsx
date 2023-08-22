import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeAction } from '../../store/reducer/userReducer'
import TaskInUserItem from '../TaskInUserItem'

export default function User({id, name, lastname, age, gender}) {
    const dispatch = useDispatch()

    const backgroundColor = gender === 'frau' ? '#fd79a8' : '#0984e3' 
    const tasks = useSelector(state => state.tasks).filter(task => task.userId === id)

  return (
    <div style={{backgroundColor}} className={s.item}>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{age}</p> 
        <p>Кол-во задач: {tasks.length}</p>  
        <div>
           {
            tasks.map(task => <TaskInUserItem key={task.id} {...task}/>)
           }
        </div>     
        <button onClick={() => dispatch(removeAction(id))}>Удалить</button>      
    </div>
  )
}


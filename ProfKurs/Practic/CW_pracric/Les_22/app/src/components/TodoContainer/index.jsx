import React from 'react'
import TodoList from '../TodoList'
import { useState } from 'react'

export default function TodoContainer() {

    const defaultTasks =  [
        {id: 1, title: 'Поесть', done: true, important: false},
        {id: 2, title: 'Выполнить работу', done: false, important: true},
        {id: 3, title: 'Убраться дома', done: true, important: true},
        {id: 4, title: 'Вынести мусор', done: false, important: false},
        {id: 5, title: 'Покататься на велосипеде', done: true, important: true}
    ]

    const [tasks, setTasks] = useState(defaultTasks)

    const remove = (removeId) => {
      setTasks(tasks.filter(({id}) => id != removeId))
    }  

  return (
    <div>
        <TodoList tasks={tasks} remove={remove}/>
    </div>
  )
}

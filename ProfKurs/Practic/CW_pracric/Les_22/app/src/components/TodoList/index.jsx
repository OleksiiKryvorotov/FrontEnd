import React from 'react'
import TodoItem from '../TodoItem'

export default function TodoList({tasks, remove}) {
    
  return (
    <div>
        {
            tasks.map(item => <TodoItem key={item.id} {...item} remove={remove} />)
        }
    </div>
  )
}

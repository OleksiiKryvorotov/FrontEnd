import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem';

export default function TodosContainer() {

  const todos_state = useSelector(state => state.todos.list);

  console.log(todos_state);

  return (
    <div>
        <TodoItem />
    </div>
  )
}
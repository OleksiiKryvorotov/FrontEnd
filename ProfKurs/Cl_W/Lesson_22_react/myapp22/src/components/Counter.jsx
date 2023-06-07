import React, { useState } from 'react'
// Для простого счетчика:
export default function Counter () {
    let [ likes, setLikes ] = useState(0)
    // [состояние, ф-ция отслеживает измен. сост.]
    //  useState(0) задаем начальное значение - 0
    
// let likes = 0

const increment = () => {
    setLikes(likes += 1)
}

const decrement = () => {
    setLikes(likes -= 1)
}
  return (
    
    <div>
        <p>{ likes }</p>
        <button onClick={decrement}>-</button>        
        <button onClick={increment}>+</button>
    </div>
  )
}

// Для задач 3-5:





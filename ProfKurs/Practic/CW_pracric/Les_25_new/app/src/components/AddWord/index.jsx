import React from 'react'
import { useDispatch } from 'react-redux'
import { addWordAction } from '../../store/reducer/wordsReducer'

export default function AddWord() {

    const dispatch = useDispatch()

    const onSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value
        // console.log(title);
        dispatch(addWordAction(title)) 
        event.target.reset()  
    }

  return (
    <form onSubmit={onSubmit}>
        <input type='text' name='title' /> 
        <button>Добавить</button>
    </form>
  )
}

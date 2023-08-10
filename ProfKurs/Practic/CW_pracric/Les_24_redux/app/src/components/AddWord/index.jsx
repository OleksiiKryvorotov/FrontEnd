import React from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/wordsReducer'

export default function AddWord() {

// реализовать процесс добавления в массив со словами добавляемого слова

    const dispatch = useDispatch()
//---------------------------------------     

    const onSubmit = (event) => {
        event.preventDefault()
        const word = event.target.word.value

// реализовать процесс добавления в массив со словами добавляемого слова

        dispatch(addAction(word))
//---------------------------------------       

        event.target.reset()
    }
  return (
    <form onSubmit={onSubmit}>
        <input type='text' placeholder='Слово' name='word' />
        <button>Добавить</button>
    </form>
  )
}


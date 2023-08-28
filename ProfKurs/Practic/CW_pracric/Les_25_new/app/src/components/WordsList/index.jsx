import React from 'react'
import { useSelector } from 'react-redux'
import WordItem from '../WordItem'

export default function WordsList() {

const wordsArray = useSelector(state => state.words)

return (
  <div>
      {
        wordsArray.length === 0 ? <p>Список слов пуст</p>
        : wordsArray.map(word => <WordItem key={word.id} {...word}/>)
      }
  </div>
 )
}

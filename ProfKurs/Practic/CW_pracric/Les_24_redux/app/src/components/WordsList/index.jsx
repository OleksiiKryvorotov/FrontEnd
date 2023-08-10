import React from 'react'
import Word from '../Word'
import { useSelector } from 'react-redux'

export default function WordsList() {

  // так было сначала:
    // const words = [
    //     {id:1, value: 'велосипед'},
    //     {id:2, value: 'ролики'},
    //     {id:3, value: 'самокат'},
    //     {id:4, value: 'лыжи'},
    //     {id:5, value: 'скейт'}
    // ]

  // доработать WordList таким образом, чтобы данные тянулись из редакса (из wordsReducer):
  const words = useSelector(state => state.words)    


  return (
    <div>{
        words.map(item => <Word key={item.id} {...item} />)
    }
    </div>
  )
}

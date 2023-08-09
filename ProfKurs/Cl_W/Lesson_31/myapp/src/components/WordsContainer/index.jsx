import React from 'react'
import { useSelector } from 'react-redux'
import WordCard from '../WordCard'

export default function WordsContainer() {

    const words_state = useSelector(store => store.words)

  return (
    <div>
        {
            words_state.map(el => <WordCard key={el.id} {...el} />)
        }
    </div>
  )
}

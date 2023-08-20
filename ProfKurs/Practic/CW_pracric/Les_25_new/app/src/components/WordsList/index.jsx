import React from 'react'
import { useSelector } from 'react-redux'

export default function WordsList() {

    const wordsArray = useSelector(state => state.words)

  return (
    <div>
        {
            wordsArray.map(item => <p key={item}>{item}</p>)
        }
    </div>
  )
}

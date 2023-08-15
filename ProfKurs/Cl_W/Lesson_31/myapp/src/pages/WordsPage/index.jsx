import React from 'react'
import AddWordForm from '../../components/AddWordForm'
import WordsContainer from '../../components/WordsContainer'
import TriggersContainer from '../../components/TriggersContainer'

export default function WordsPage() {
  return (
    <div>
      <AddWordForm />
      <WordsContainer />
      <TriggersContainer />
    </div>
  )
}

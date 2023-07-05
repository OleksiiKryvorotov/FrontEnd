import React, { useContext } from 'react'
import CardItem from '../CardItem'
import s from './index.module.css'
import { Context } from '../../conrext'

export default function CardsContainer() {

  const { cards } = useContext(Context)
  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <CardItem key={el.id} {...el}  />)
      }
    </div>
  )
}

import React, { useContext } from 'react'
import { Context } from '../../context'
import PlayerItem from '../PlayerItem';
import s from './index.module.css'

export default function PlayersContainer() {

  const { players } = useContext(Context);

  return (
    <div className={s.container}>
      {
        players.length === 0
          ? <p>No players</p>
          : players.map(el => <PlayerItem key={el.id} {...el} />)
      }
    </div>
  )
}
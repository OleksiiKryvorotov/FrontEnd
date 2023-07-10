import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function PlayerItem({ id, player, team }) {

  const { delete_player } = useContext(Context);

  return (
    <div 
      className={s.player}
      onClick={() => delete_player(id)}
    >
      <p>{ player }</p>
      <p>{ team }</p>
    </div>
  )
}

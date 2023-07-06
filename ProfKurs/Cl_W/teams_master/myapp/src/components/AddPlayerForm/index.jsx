import React, { useContext } from 'react'
import s from './index.module.css'
import Select from 'react-select'
import { Context } from '../../context'

export default function AddPlayerForm() {

  const { teams } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { player } = e.target;
    console.log(player.value);
    e.target.reset()
  }

  return (
    <form onSubmit={submit} className={s.add_player_form}>
      <label>
        <p>Add player</p>
        <input type='text' placeholder="Players's name" name='player' />
      </label>
      <Select options={teams} />
      <button>Add player</button>
    </form>
  )
}
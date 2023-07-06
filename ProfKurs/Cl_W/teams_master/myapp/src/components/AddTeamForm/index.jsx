import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddTeamForm() {

  const { add_team } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { team } = e.target;
    const new_team = {
      value: team.value,
      label: team.value
    }
    add_team(new_team);
    e.target.reset()
  }

  return (
    <form onSubmit={submit} className={s.add_team_form}>
      <label>
        <p>Add team</p>
        <input type='text' placeholder="Team's name" name='team' />
      </label>
      <button>Add team</button>
    </form>
  )
}

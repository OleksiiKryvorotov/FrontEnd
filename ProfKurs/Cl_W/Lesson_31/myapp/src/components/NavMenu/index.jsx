import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/words'>Words</NavLink>
    </div>
  )
}
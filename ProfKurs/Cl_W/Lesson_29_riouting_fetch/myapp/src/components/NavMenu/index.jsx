import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { BiMenu } from 'react-icons/bi'

export default function NavMenu() {

  const [ active, setActive ] = useState(false);

  const toggleMenu = () => setActive(!active);

  const linksClasses = [s.links_block, active ? s.opened : ''].join(' ');

  console.log(active);

  return (
    <div className={s.nav_menu}>
      <BiMenu 
        className={s.menu_icon} 
        onClick={toggleMenu}
      />
      <div className={linksClasses}>
        <Link to='/'>Main</Link>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/products'>Products</Link>
      </div>
    </div>
  )
}

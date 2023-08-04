import React from 'react'
import { NavLink } from "react-router-dom"
import s from './style.module.css'
import { links } from './links'

export default function Nav() {
  const className = ({isActive}) => [s.link, isActive ? s.active : ''].join(' ');

  return (
    <nav className={s.nav}>
         {
            links.map(({id, link, title})=>
                <NavLink key={id} className={className} to={link}>
                     {title}
                </NavLink>
                ) 
         }            
    </nav>
  )
}



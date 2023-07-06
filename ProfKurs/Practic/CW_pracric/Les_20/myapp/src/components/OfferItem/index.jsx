import React from 'react'
import s from './style.module.css'

export default function OfferItem({title}) {
  return (    
    <div className={s.item}>
        <p>{title}</p>
    </div>
  )
}

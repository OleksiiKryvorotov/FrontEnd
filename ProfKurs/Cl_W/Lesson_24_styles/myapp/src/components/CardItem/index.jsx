import React from 'react'
import s from './index.module.css'

export default function CardItem({ id, rus, eng, lang, delete_card }) {

    const card_text = lang === 'eng' ? eng : rus;

    const styles = {
      color: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)',
      backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
    }

  return (
    <div className={s.card_item} style={styles}>
       
        <span onClick={() => delete_card(id)}>X</span>
        <p> { card_text }</p>
    </div>
  )
}

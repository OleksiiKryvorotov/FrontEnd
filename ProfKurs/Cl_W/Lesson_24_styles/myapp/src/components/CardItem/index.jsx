import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../conrext';

export default function CardItem({ id, rus, eng, lang}) {

  const { delete_card, change_lang} = useContext(Context)

  const card_text = lang === 'eng' ? eng : rus;

  const styles = {
    color: lang === 'eng' ? 'white' : 'rgb(41, 128, 185)',
    backgroundColor: lang === 'eng' ? 'rgb(41, 128, 185)' : 'white'
  }

  const deleteCard = event => {
    delete_card(id);
    event.stopPropagation()
  }

  return (
    <div 
      className={s.card_item} 
      style={styles}
      onClick={() => change_lang(id)}
    >
      <span onClick={deleteCard}>X</span>
      
      {/* <span onClick={(event) => {
        delete_card(id);
        event.stopPropagation()
      }}>X</span> */}

      <p>{ card_text }</p>
    </div>
  )
}

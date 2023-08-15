import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { changeColordAction, deleteCardAction } from '../../store/reducers/productsReducer';

export default function ProductCard({ id, title, price, color, clicked }) {

  const dispatch = useDispatch();

  const styles = {
    backgroundColor: clicked ? 'lightpink' : 'lightgray'
  }  
  //Применяем stopPropagation чтобы не было ошибки при удалении карточки - ДВА onClick в одном DIV!
  const deleteCard = e => {
    dispatch(deleteCardAction(id));
    e.stopPropagation();
  }
  //---------------------------------



  return (
    <div 
      className={s.product}
      style={styles}
      onClick={() => dispatch(changeColordAction(id))}
    >
      <span 
        className={s.close}
        //Применяем stopPropagation чтобы не было ошибки при удалении карточки - ДВА onClick в одном DIV!
        onClick={deleteCard}
        //---------------------------------
      >
        X
      </span>
      <p>Title: {title}</p>
      <p>Price: {price}$</p>
      <p>Color: {color}</p>
    </div>
  )
}
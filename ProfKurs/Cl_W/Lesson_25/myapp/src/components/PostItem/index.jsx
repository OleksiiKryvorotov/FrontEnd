import React, { useContext } from 'react'
import s from './index.module.css'
import LikeBtn from '../LikeBtn'
import { Context } from '../../context'

export default function PostItem({ id, title, description, like, comments }) {

  const { delete_post } = useContext(Context);

  return (
    <div className={s.post_item}>
      <p onClick={() => delete_post(id)}>X</p>
      <LikeBtn like={like} post_id={id} />
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  )
} 
import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context'

export default function CommentsItem({ id, comment, post_id }) {

  const { delete_comment } = useContext(Context);

  return (
    <div 
      className={s.item} 
      onClick={() => delete_comment(id, post_id)}
    >
      { comment }
    </div>
  )
}
import React from 'react'
import s from './index.module.css'

export default function CommentsItem({ id, comment }) {
  return (
    <div className={s.item}
     onClick={() => delete_comment(id, post_id)}
     >
      { comment }
    </div>
  )
}
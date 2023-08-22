import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, incrementCountAction } from '../../store/reducers/postsReducer';

export default function PostItem({ id, title, body, tags, reactions }) {

  const dispatch = useDispatch();

  return (
    <div className={s.post_item}>
      <h3>{title}</h3>
      <p>{body}</p>
      
      <div className={s.post_tags}>
        <p>Tags:</p>
        {
          tags.map(el => <div className={s[el]} key={el}>{el}</div>)
        }
      </div>

      {/* s[el] === s['history']
      s[el] === s['american']
      s[el] === s['crime'] */}
      
      <div className={s.post_likes}>
        <p>Likes: {reactions}</p>
        <div>
          <button onClick={() => dispatch(decrementCountAction(id))}>-</button>
          <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>
      </div>

    </div>
  )
}

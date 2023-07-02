import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function LikeBtn({ like, post_id }) {
 
  const { change_like } = useContext(Context);

  const like_text = like ? 'Liked' : 'Like?';

  const btn_styles = {
    backgroundColor: like ? 'blue' : 'azure',
    color: like ? 'white' : 'black'
  }

  return (
    <div 
      className={s.like_btn} 
      style={btn_styles}
      onClick={() => change_like(post_id)}
    >
      { like_text }
    </div>
  )
}


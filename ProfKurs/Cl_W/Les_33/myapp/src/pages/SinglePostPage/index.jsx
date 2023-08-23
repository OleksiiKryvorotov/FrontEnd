import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePost } from '../../requests/posts_req'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.css'

export default function SinglePostPage() {

  const { post_id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSinglePost(post_id)), [])

  const single_post_state = useSelector(state => state.singlePost)
  console.log(single_post_state);

  const { title, body, reactions, tags} = single_post_state

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Likes: {reactions}</p>
      <div>
        Tags:
      {
        tags && tags.map(el => <div key={el}>{el}</div>)
      }
      </div>
    </div>
  )
}

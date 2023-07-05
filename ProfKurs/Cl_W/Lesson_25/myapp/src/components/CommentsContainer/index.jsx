import React from 'react'
import CommentsItem from '../CommentItem'
import AddCommentForm from '../AddCommentForm'

export default function CommentsContainer({ comments, post_id }) {
  return (
    <div>
      <div>
        {
          comments.map(el => <CommentsItem key={el.id} {...el} />)
        }
      </div>
      <AddCommentForm post_id={post_id} />
    </div>
  )
}

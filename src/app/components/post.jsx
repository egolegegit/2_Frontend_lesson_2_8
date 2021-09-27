import React from 'react'
import { useHistory } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Post = ({ posts, postId }) => {
  const history = useHistory()

  const getPostById = (id) => {
    // eslint-disable-next-line react/prop-types
    return posts.find((post) => post.id.toString() === id)
  }
  const post = getPostById(postId)

  const handleSave = () => {
    history.push('/posts')
  }

  if (post) {
    return (
      <div className='flex flex-col px-24 h-1/2'>
        <span>{post.label}</span>
        <button
          onClick={() => {
            handleSave()
          }}
          className='btn'
        >
          Сохранить
        </button>
      </div>
    )
  }
  return `Post id=${postId} not found`
}

export default Post

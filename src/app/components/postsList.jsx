/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const PostsList = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col justify-center px-24">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`posts/${post.id}`}
            className="p-2 hover-link"
          >
            <h3>{post.label}</h3>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PostsList

import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import query from 'query-string'
import _ from 'lodash'
import Post from './post'
import Postlist from './postsList'

const Posts = () => {
  const posts = [
    { id: 1, label: 'Тестирование возможностей Tailwindcss' },
    {
      id: 2,
      label: 'Настройка React + Tailwindcss + scss',
    },
    {
      id: 3,
      label: 'Подключение компонента переключения Light Mode / Dark Mode',
    },
    {
      id: 4,
      label: 'Извлечение общих стилей (hover, botton, etc) в @layer components',
    },
  ]
  const params = useParams()
  const location = useLocation()
  const search = query.parse(location.search)
  const cropPosts = search.id
    ? _(posts).slice(0).take(search.id).value()
    : posts
  const postId = params.postId

  return (postId
? (
    <Post posts={posts} postId={postId} />
  )
: (
    <Postlist posts={cropPosts} />
  ))
}

export default Posts

import React from 'react'
import PostListItem from '../PostListItem'

const PostList = ({posts, onDelete}) => {

  const elements = posts.map((item) => {
    return(
      <PostListItem
      {...item} key={item.id} onDelete={() => onDelete(item.id)}
      />
    )
  })


  return (
    <div className='posts mt-5'>
        {elements}
    </div>
  )
}

export default PostList
import React from 'react'
import PostListItem from '../PostListItem'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map((item) => {
    return(
      <PostListItem
      {...item} key={item.id} onDelete={() => onDelete(item.id) }
       onToggleImportant={() => onToggleImportant(item.id)}
       onToggleLiked={() => onToggleLiked(item.id)}  
    
      />
    )
  })


  return (
    <div className='posts mt-5'>
      {
        posts.length > 0 ?
        elements
        : (<h3 style={{"color":"red"}}>No post yet!</h3>)
      }
    </div>
  )
}

export default PostList
import React from 'react'

import './PostListItem.css'

const PostListItem = ({label, important=false}) => {

  let classNames = 'post-item  d-flex  justify-content-between align-items-center'
  let i = 'fa fa-star'

  if(important){
    classNames += ' important'
    i += ' important'
  }

  return (
    <div className={classNames}>
        <p>{label}</p>
        <div className='actions'>
            <button className='btn btn-light '><i className={i}></i></button>
            <button className='btn btn-light '><i className='fa fa-trash'></i></button>
            {/* <button className='btn btn-light'><i className='fa fa-heart'></i></button> */}
        </div>
    </div>
  )
}

export default PostListItem
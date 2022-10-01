import React from 'react'

import './PostAddForm.css'

const PostAddForm = () => {
  return (
    <div className='post-add mt-5 d-flex justify-content-between'>
         <input
          type="text"
          placeholder='What are you thinking about?'
         />
         <button className='btn btn-md px-3 btn-outline-success'>Create</button>
    </div>
  )
}

export default PostAddForm
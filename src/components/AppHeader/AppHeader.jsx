import React from 'react'

import './AppHeader.css'

const AppHeader = ({allPosts, liked}) => {
  return (
  
    <div className='app-header d-flex justify-content-between'>
           <h2>Javlonbek Abdurasulov</h2>
           <h3>{allPosts} posts, like {liked}</h3>
    </div>
  )
}

export default AppHeader
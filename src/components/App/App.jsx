import React from 'react'
import AppHeader from '../AppHeader'
import PostAddForm from '../PostAddForm'
import PostList from '../PostList'
import PostStatusFilter from '../PostStatusFilter'
import SearchPanel from '../SearchPanel'

import  './App.css'

const App = () => {

  const data = [
    {label:'To be master from React', important: true, id:1},
    {label:'Write code on computer', important: false, id:2}, 
    {label:'do somethings', important: false, id:3 }
  ]

  return (
    <div className='app container mt-5 mx-auto'>
      <AppHeader/>
      <div className='d-flex justify-content-between my-3'>
         <SearchPanel/>
         <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  )
}

export default App
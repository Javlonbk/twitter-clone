import React from 'react'

import './SearchPanel.css'
const SearchPanel = () => {
  return (
    <div className='search-panel'>
        <input
         type="search"
         placeholder="Search by posts"
        />
    </div>
  )
}

export default SearchPanel
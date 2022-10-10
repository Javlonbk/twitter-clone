import React from 'react'
import AppHeader from '../AppHeader'
import PostAddForm from '../PostAddForm'
import PostList from '../PostList'
import PostStatusFilter from '../PostStatusFilter'
import SearchPanel from '../SearchPanel'
import  './App.css'

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data:[
        {label:'To be master from React', important: false, liked: false, id:1},
        {label:'Write code on computer', important: false, liked: false, id:2}, 
        {label:'do somethings', important: false, liked: false, id:3 }
      ],
      term: '',
      filter: 'all'
    }
  }

  onDelete = (id) => {
     let newData = this.state.data.filter((item) => {
      return item.id !== id
     })
     this.setState({data: newData})
  }
  onAdd = (post) => {
    const newPost = {
      label: post,
      id: this.state.data.length + 1
    }
    this.setState({data: [...this.state.data, newPost]})
  }
  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => {
        return item.id === id
      })
      const oldItem = data[index]
      const newItem = {...oldItem, important: !oldItem.important }
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }
  onToggleLiked = (id) => {
    
    this.setState(({data}) => {
      const index = data.findIndex(item => {
        return item.id === id
      })
      const oldItem = data[index]
      const newItem = {...oldItem, liked: !oldItem.liked }
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  searchPost = (items, term) => {
      if(term.length == 0){
        return items
      }
      return  items.filter(item => {
        return item.label.toLowerCase().includes(term.toLowerCase())
      })
  }

  onUpdateSearch = (term) => {
    this.setState({term})
  }
  
  filterPost (items, filter){
    if(filter === 'liked'){
      return items.filter(item => item.liked)
    }
    else{
      return items
    }
  }
  onFilterSelect = (name) => {
    this.setState({filter: name}) 
  }
  
  

  render(){
  const  {data, term, filter} = this.state
  const liked = data.filter((item) => item.liked).length
  const allPosts = data.length
  
  const visiblePosts = this.filterPost((this.searchPost(data, term)), filter)
  const aap = this.filterPost(data, filter)
  
  return (
      <div className='app container mt-5 mx-auto'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className='d-flex justify-content-between my-3'>
           <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
           />
           <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
           />
        </div>
        <PostList 
        posts={visiblePosts}
         onDelete={(id) => this.onDelete(id)} 
         onToggleImportant={this.onToggleImportant}
         onToggleLiked={this.onToggleLiked}

         />
        <PostAddForm onAdd={(post) => this.onAdd(post)} />
      </div>
    )
  }

}
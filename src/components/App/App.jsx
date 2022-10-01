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
        {label:'To be master from React', important: true, id:1},
        {label:'Write code on computer', important: false, id:2}, 
        {label:'do somethings', important: false, id:3 }
      ],
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
    console.log(this.state.data)
  }

  render(){
  const  {data} = this.state
    return (
      <div className='app container mt-5 mx-auto'>
        <AppHeader/>
        <div className='d-flex justify-content-between my-3'>
           <SearchPanel/>
           <PostStatusFilter/>
        </div>
        <PostList posts={data} onDelete={(id) => this.onDelete(id)} />
        <PostAddForm onAdd={(post) => this.onAdd(post)} />
      </div>
    )
  }

}
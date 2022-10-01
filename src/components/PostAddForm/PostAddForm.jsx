import React from 'react'
import './PostAddForm.css'

export default class PostAddForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
       inVal: ''
    }
  }

  getVal = (e) => {
     this.state.inVal = e
     console.log(this.state.inVal)
  }

  render(){
    const {onAdd} = this.props
    return (
      <div className='post-add mt-5 d-flex justify-content-between'>
           <input onInput={(e) =>  {this.getVal(e.target.value)}}
            type="text"
            placeholder='What are you thinking about?'
           />
           <button onClick={() => {onAdd(this.state.inVal)}} className='btn btn-md px-3 btn-outline-success'>Create</button>
      </div>
    )
  }

}


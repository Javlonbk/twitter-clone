import React, { Component } from 'react'
import './PostStatusFilter.css'
export default class PostStatusFilter extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      buttons: [
        {name:'all' , label:'All'},
        {name:'liked' , label:'Liked'}
      ]
    } 

  }
  
  render() {
    const buttons = this.state.buttons.map(({name, label}) => {
      const active = this.props.filter == name
      const classer = active ? 'btn-primary' : 'btn-outline-primary'
      return (
        <button 
          key={name} type="button"
          className={`btn ${classer}`}
          onClick={() => this.props.onFilterSelect(name)}
        >
         {label}
        </button>
      )
    })
    return (
      <div className='btn-group'>
          {buttons}
      </div>
    )
  }
}

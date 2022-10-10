import React, { Component } from 'react'
import './SearchPanel.css'

export default class SearchPanel extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }


  }


  getInputVal = (e) => {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term)
  }

  render(){

    return (
      <div className='search-panel'>
          <input
           type="search"
           placeholder="Search by posts"
           onChange={this.getInputVal}
          />
      </div>
    )
  
  }
}

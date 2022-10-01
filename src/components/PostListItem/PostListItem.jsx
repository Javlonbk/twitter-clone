import React from "react";

import "./PostListItem.css";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    };
  }
  onImportant = () => {
    this.setState(({important}) => ({important: !important}))
    console.log(this.state.important)
  }
  onLike = () => {
    this.setState(({like}) => ({like: !like}))
    console.log(this.state.like)
 
  }
  
  

  render() {
    const {label, onDelete} = this.props
    const {important, like} = this.state
    let classNames =
      "post-item  d-flex  justify-content-between align-items-center";
    let i = "fa fa-star";
    let love = "fa fa-heart"

    if(important) {
      classNames += " important";
      i += " important";
    }
    if(like){
      love += ' fa-heart-show'
    }

    return (
      <div className={classNames}>
        <p onClick={this.onLike}>{label}</p>
        <div className="actions">
          <button  onClick={this.onImportant}>
            <i className={i}></i>
          </button>
          <button onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <button><i className={love}></i></button>   
        </div>
      </div>
    );
  }
}

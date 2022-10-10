import React from "react";

import "./PostListItem.css";

export default class PostListItem extends React.Component {

  render() {
    const {label, onDelete, onToggleImportant, onToggleLiked, liked, important} = this.props
    // const {important, like} = this.state
    let classNames =
      "post-item  d-flex  justify-content-between align-items-center";
    let i = "fa fa-star";
    let love = "fa fa-heart"

    if(important) {
      classNames += " important";
      i += " important";
    }
    if(liked){
      love += ' fa-heart-show'
    }

    return (
      <div className={classNames}>
        <p onClick={onToggleLiked}>{label}</p>
        <div className="actions">
          <button  onClick={onToggleImportant}>
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

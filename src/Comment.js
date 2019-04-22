// add Comment component here
import React, { Component } from 'react'

class Comment extends Component { //Use the class X extends Component {} syntax
  render() {
    return <div className="comment">{this.props.commentText}</div>   //unpack variable values directly with JSX by wrapping thems
  }
}

export default Comment; //export the class so it can be used in other files

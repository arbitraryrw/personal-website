import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class PostItem extends Component {

  getStyle = () => {

    //Long
    // if(this.props.post.complete){
    //   return{
    //     textDecoration: 'line-through'
    //   }
    // }
    // else{
    //   return{
    //     textDecoration: 'none'
    //   }
    // }
    return{
      background: '#008563',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.post.completed ?
      'line-through' : 'none'
    }
  }



  render(){

    const { id, title } = this.props.post;

    return(
      // <div style= {{backgroundColor: '#ef42f5'}}>
      // <div style= {itemStyle}>
      <div style= {this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        <h1>
        { title }
        <button
        onClick={this.props.deletePost.bind(this,id)}
        style = {btnStyle}> x </button>
        </h1>
      </div>
    )
  }
}

// PropTypes
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: "50%",
  cursor: 'poiner',
  float: 'right'
}

export default PostItem;

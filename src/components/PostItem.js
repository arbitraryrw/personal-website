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
      textDecoration: this.props.post.complete ?
      'line-through' : 'none'
    }

  }

  render(){
    return(

      // <div style= {{backgroundColor: '#ef42f5'}}>
      // <div style= {itemStyle}>
      <div style= {this.getStyle()}>
        <input type="checkbox" onChange={this.markComplete}/> 
        <h1>{this.props.post.title }</h1>
      </div>
    )
  }
}

// PropTypes
PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

const itemStyle = {
  backgroundColor: '#ef42f5'
}

export default PostItem;

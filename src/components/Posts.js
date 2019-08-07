import React from 'react';
import PostItem from './PostItem';
import PropTypes from 'prop-types'

class Posts extends React.Component {

  render(){
    return this.props.posts.map((post) => (
      <PostItem key={post.id} post={post} markComplete={this.props.markComplete} deletePost={this.props.deletePost}/>
    ));
  }
}

// PropTypes
Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts;

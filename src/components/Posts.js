import React from 'react';
import PostItem from './PostItem';

class Posts extends React.Component {
  render(){
    return this.props.posts.map((post) => (
      <PostItem/>
    ));
  }
}

export default Posts;

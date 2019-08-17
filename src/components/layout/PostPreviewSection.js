import React from 'react';
import PropTypes from 'prop-types'

class PostPreviewSection extends React.Component {

  render(){
    console.log(this.props.posts)



    return this.props.posts.map((post) => (
      // <PostItem key={post.id} post={post} markComplete={this.props.markComplete} deletePost={this.props.deletePost}/>

      <h1 key ={post.id} style={{padding:"50px"}}> { post.title }</h1>
    ));
  }
}

// PropTypes
PostPreviewSection.propTypes = {
  posts: PropTypes.array.isRequired,
}


export default PostPreviewSection;

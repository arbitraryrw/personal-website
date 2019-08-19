import React from 'react';
import PropTypes from 'prop-types'

class PostPreviewSection extends React.Component {

  render(){


    return (
      <div>
      <h1 style = {{textAlign: "center"}}>Blog Posts</h1>
      <hr style= {{borderWidth: "15px"}}/>
      { this.props.posts.map((post) => (
          // <PostItem key={post.id} post={post} markComplete={this.props.markComplete} deletePost={this.props.deletePost}/>

          <h1 key ={post.id} style={{padding:"50px"}}> { post.title }</h1>
        )) }
      </div>
    );
  }
}

// PropTypes
PostPreviewSection.propTypes = {
  posts: PropTypes.array.isRequired,
}


export default PostPreviewSection;

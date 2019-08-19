import React from 'react';
import PropTypes from 'prop-types'
import uuid from 'uuid';

class PostPreviewSection extends React.Component {

  render(){

    console.log(this.props);

    return (
      <div key={uuid.v4()}style={{maxWidth: "710px",margin: "4rem auto", width:"80%"}}>
      <h1 style = {{textAlign: "center"}}>Blog Posts</h1>
      <hr style= {hrHeaderStyle}/>

      { this.props.posts.map((post) => (
          // <PostItem key={post.id} post={post} markComplete={this.props.markComplete} deletePost={this.props.deletePost}/>
          <div key ={post.id} style={{paddingBottom:"10px"}}>
            <h1> { post.title }</h1>
            <p style = {{ textAlign:"justify"}}>
              Maecenas non metus quis sapien aliquet consequat non ut leo. Nullam sollicitudin ullamcorper felis vel feugiat. Vestibulum arcu urna, iaculis in elit vitae, gravida sollicitudin nunc. Morbi ut eros eget felis malesuada cursus eu ac metus. Aenean ac varius sapien. Aliquam in nibh ac justo tincidunt fermentum nec at tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p style={{ color: "#A2A2A2", fontSize: "0.9rem" }}>
              Nikola Cucakovic | 19th August 2019
            </p>
          </div>
        )) }
      </div>
    );
  }
}

// PropTypes
PostPreviewSection.propTypes = {
  posts: PropTypes.array.isRequired,
}

const hrHeaderStyle = {
  border: 0,
  borderBottom: "1px dashed #ccc",
  background: "#999"
}




export default PostPreviewSection;

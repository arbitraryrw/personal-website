import React, {Component} from 'react';

export class AddPost extends Component {
  render(){
    return(
      <form style = {{display: 'flex', padding: '5px'}}>
        <input
          type="text"
          name="title"
          placeholder="Add Post.."
          style={{flex: '10'}}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddPost

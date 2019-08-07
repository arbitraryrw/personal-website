import React, {Component} from 'react';

export class AddPost extends Component {

  state = {
    title: ''
  }

  //component level state
  onUserInputChange = (e) => {
    // This works but it would be annoying to have to rewrite a new
    // method for each state property..
    // this.setState({ title: e.target.value });

    // Takes the value from the input name="title" and uses that
    // to reference the property and then update the value on the input
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state.title);
    this.setState({ title: '' })
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} style = {{display: 'flex', padding: '5px'}}>
        <input
          type="text"
          name="title"
          placeholder="Add Post.."
          style={{flex: '10'}}
          value={this.state.title}
          onChange={this.onUserInputChange}
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

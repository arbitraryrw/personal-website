import React from 'react';

import Posts from './components/Posts';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    posts: [
      {
        id:1,
        title: 'First post',
        complete:false
      },
      {
        id:2,
        title: 'Second post',
        complete:false
      },
      {
        id:3,
        title: 'Third post',
        complete:false
      }
    ]
  }

  // The reason the = blah => syntax is used is to save you from having to
  //write method.bind(this) to pass in the context for this
  markComplete = (id) => {
    this.setState({posts: this.state.posts.map(post => {
      if (post.id === id){
        post.complete = !post.complete
      }
      return post;

    }) })
  }

  deletePost = (id) => {
    //The filter method is a high order array method, it conditionally returns
    //an array. So filter iterates through the state object and returns on the
    //condition. We only return posts that don't match the id that's passed becase
    //we want to delete that. ... is the spread operator, this copies everything
    //that is currently there
    this.setState({posts: [...this.state.posts.filter(post => post.id !== id)]})
    console.log(id);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Posts posts={this.state.posts} markComplete={this.markComplete} deletePost={this.deletePost}/>

          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://github.com/arbitraryrw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>


        </header>
      </div>
    );
  }
}

export default App;

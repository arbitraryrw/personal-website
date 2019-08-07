import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/pages/About';

import Header from './components/layout/Header';
import Posts from './components/Posts';
import AddPost from './components/AddPost';

import uuid from 'uuid';

import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {

  state = {
    posts: []
  }

  // The reason the = blah => syntax is used is to save you from having to
  //write method.bind(this) to pass in the context for this
  markComplete = (id) => {
    this.setState({posts: this.state.posts.map(post => {
      if (post.id === id){
        post.completed = !post.completed
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

  addPost = (title) => {
    console.log(title);
    const newPost = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ posts : [...this.state.posts, newPost]})
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos').then( resp => console.log(resp.data))
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">

            <Header />
            <Route exact path="/" render={props=>(
              <React.Fragment>
                <AddPost addPost={this.addPost}/>
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
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;

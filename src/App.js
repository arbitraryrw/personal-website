import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/pages/About';

import Header from './components/layout/Header';
import Banner from './components/layout/Banner';
import SocialMediaIcons from './components/layout/SocialMediaIcons';
// import Posts from './components/Posts';
// import AddPost from './components/AddPost';

import uuid from 'uuid';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    posts: [
      {
        id: uuid.v4(),
        title: "Builder",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Post 2",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Post 3",
        completed: false
      }
    ]
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
    // console.log(id);

    // Delete API requires id to delete
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // .then(resp => this.setState({posts: [...this.state.posts.filter(post => post.id !== id)]}))
  }

  addPost = (title) => {
    const newPost = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ posts : [...this.state.posts, newPost]})

    // console.log(title)
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title: title,
    //   completed: false
    // })
    // .then(resp => this.setState({ posts : [...this.state.posts, resp.data]}));

  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1').then( resp => this.setState({ posts: resp.data}));
    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then( resp => console.log(resp.data));
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">

            {/*<Header />*/}

            <Route exact path="/" render={props=>(

              <React.Fragment>

              <Banner/>
              <SocialMediaIcons/>

              {/*
                <AddPost addPost={this.addPost}/>
                <Posts posts={this.state.posts} markComplete={this.markComplete} deletePost={this.deletePost}/>
              {/*<img src={logo} className="App-logo" alt="logo" />*/}

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

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

  render(){
    console.log(this.state.posts)
    return (
      <div className="App">
        <header className="App-header">
          <Posts />
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

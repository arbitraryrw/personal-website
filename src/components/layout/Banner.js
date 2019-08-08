import React from 'react';

class Banner extends React.Component {

  printLetterByLetter = (e) => {
    console.log("yaay")
  }

  render(){
    return(

      <button onClick={this.printLetterByLetter}>
        Dummy value
      </button>


    )
  }
}

export default Banner;

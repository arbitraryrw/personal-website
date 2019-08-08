import React from 'react';

class Banner extends React.Component {

  printLetterByLetter = (e) => {
    console.log("yaay")
  }

  render(){
    // console.log("content: " + this.props.banner);
    return(

      this.props.banner.map((banner) => (

      <h1> { banner } </h1>

    ))

    )
  }
}

export default Banner;

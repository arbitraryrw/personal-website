import React from 'react';

class Banner extends React.Component {

  printLetterByLetter = (word) => {
    return(

      word[0]
    )
  }

  componentDidMount() {
    this.printLetterByLetter("hi");
  }

  render(){
    // console.log("content: " + this.props.banner);
    return(

      this.props.banner.map((banner, index) => (

      <p> { this.printLetterByLetter(banner) } </p>

    ))


    )
  }
}

export default Banner;

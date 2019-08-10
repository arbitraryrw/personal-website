import React from 'react';

class Banner extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    text: 'example',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150
  }
}

  handleType = () => {
    console.log(this.props.banner)
    const dataText  = this.props.banner;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 200
    });

    if (!isDeleting && text === fullText) {

      setTimeout(() => this.setState({ isDeleting: true }), 1500);

    } else if (isDeleting && text === '') {

      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });

    }

    setTimeout(this.handleType, typingSpeed);
  };


  componentDidMount() {
    this.handleType();
  }

  render(){
    // console.log("content: " + this.props.banner[0]);
    return(

    //   this.props.banner.map((banner, index) => (
    //
    //   <p key={index} > { this.printLetterByLetter(banner) } </p>
    //
    // ))

    <p style= {{minWidth: '100px'}} >{ this.props.heading }&nbsp;
      <span>{ this.state.text }</span>
      <span id="cursor"></span>
    </p>


    )
  }
}

export default Banner;

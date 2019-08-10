import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

class Banner extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    firstCycle:true,
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150,
    bannerText: [
      "Hey, I'm Nik",
      "I build things",
      "I break things",
      "I solve problems"
    ]
  }
}

  handleType = () => {
    // console.log(this.props.banner)
    const dataText  = this.state.bannerText;
    const { firstCycle, isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    // console.log("Writing: " + fullText + ", index: " + i)

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 200
    });

    if (!isDeleting && text === fullText) {

      //State change done before timeout, that was a boo boo
      this.setState({ isDeleting: true });

    } else if (isDeleting && text.length === 0) {
      // console.log("HIT")

      // Get rid of the intro line after the first cycle
      // This removes the first intro element in the array dataText
      // component state after completing the first cycle and resets
      // the loop count.

      if (firstCycle && i+1 === dataText.length){
        // console.log("We ripping it out!")

        dataText.shift()
        this.setState({
          firstCycle: false,
          isDeleting: false,
        });
      }
      else{
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
      }
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
    <div>
    <p style= {{minWidth: '100px', padding:"0", marginBottom:"5px", fontSize: "5vmin" }} >
      <span>{ this.state.text }</span>
      <span id="cursor"></span>
    </p>

    <p style= {{minWidth: '100px', marginTop:"0"}}>
    Security Specialist / Developer / Reverser Engineer
    </p>

    <SocialMediaIcons/>

    </div>
    )
  }
}



export default Banner;

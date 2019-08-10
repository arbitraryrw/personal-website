import React from 'react';

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
      "Hey, I'm Nikola",
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


    <ul style = {socialMediaStyle} >
      <li style = {listItemStyle}>
        <a href="https://twitter.com/arbitraryrw">
          twitter
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="https://github.com/arbitraryrw">
        Github
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="https://www.linkedin.com/in/nikola-cucakovic-623aa677/">
        LinkedIn
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="https://www.instagram.com/nikapotomus/">
        Instagram
        </a>
      </li>
    </ul>


    </div>
    )
  }
}

const listItemStyle = {
   marginRight:"20px",
   float: "left"
}

const socialMediaStyle = {
  marginTop: "10px",
  padding:"0px",
  listStyle:"none",
  // background: '#333',
  listStyleType: "none",
  display:"flex"
}

export default Banner;

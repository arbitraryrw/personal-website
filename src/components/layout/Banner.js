import React from 'react';

class Banner extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    firstRun:true,
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 150
  }
}

  handleType = () => {
    // console.log(this.props.banner)
    const dataText  = this.props.banner;
    const { firstRun, isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    // console.log(i)
    let fullText = dataText[i];


    this.setState({firstRun: firstRun ? false: false});

    if(firstRun){
      fullText = "Hi, I'm Nikola";
    }

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 200
    });

    if (!isDeleting && text === fullText) {

      setTimeout(() => this.setState({ isDeleting: true }), 1500);

    } else if (isDeleting && text.length < 1) {

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
    <div>
    <p style= {{minWidth: '100px', padding:"0", marginBottom:"5px"}} >
      <span>{ this.state.text }</span>
      <span id="cursor"></span>
    </p>

    <p style= {{minWidth: '100px', marginTop:"0"}}>
    Security Specialist / Developer / Reverser
    </p>

    <ul style = {socialMediaStyle} >
      <li style = {listItemStyle}>
        <a href="#">
        Twitter
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="#">
        Github
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="#">
        LinkedIn
        </a>
      </li>
      <li  style = {listItemStyle}>
        <a href="#">
        Git
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
  color: "#fff",
  padding:"0px",
  listStyle:"none",
  background: '#333',
  color: '#fff',
  listStyleType: "none",
  display:"flex"
}

export default Banner;

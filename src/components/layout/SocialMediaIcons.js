import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
 import {
   faGoogle,
   faFacebook,
   faTwitter
 } from '@fortawesome/free-brands-svg-icons';

 library.add(
   faGoogle,
   faFacebook,
   faTwitter
 );
 class SocialMediaIcons extends Component {
   render() {
    return (
     <div className="social-icons">
       <ul>
          <li><a href="javascript:void(0)" className="facebook"><FontAwesomeIcon icon="fafacebook" /></a></li>
          <li><a href="javascript:void(0)" className="twitter"><FontAwesomeIcon icon="fatwitter" /></a></li>
         <li><a href="javascript:void(0)" className="instagram"><FontAwesomeIcon icon="fainstagram" /></a></li>
        </ul>
      </div>
    )
  }
 }

 export default SocialMediaIcons;

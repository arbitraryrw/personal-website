import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import {
 faLinkedin,
 faLinkedinIn,
 faInstagram,
 faGithub,
 faGithubSquare,
 faTwitter,
 faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faKey, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
 faLinkedin,
 faLinkedinIn,
 faInstagram,
 faGithub,
 faGithubSquare,
 faTwitterSquare,
 faEnvelope,
 faKey,
 faMapMarkerAlt
);

 class SocialMediaIcons extends Component {
   render() {
    return (
     <div className="social-icons">


        <ul style = {socialMediaStyle} >
          <li style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://twitter.com/arbitraryrw">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
          </li>
          <li  style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://github.com/arbitraryrw">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li  style = {listItemStyle}>
            <a style = {{color:"grey"}} href="https://www.linkedin.com/in/nikola-cucakovic-623aa677/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li  style = {listItemStyle}>
            <a style = {{color:"grey"}}href="https://www.instagram.com/nikapotomus/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
        </ul>

        <p style = {{color:"grey"}} >
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
          &nbsp;London, UK
        </p>

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

 export default SocialMediaIcons;

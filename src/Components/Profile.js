import React, { Component } from 'react';

const position = {
    with:"100%",
    display: "flex",
    alignItems: "center",
    margin: "1%"
}
const description= {
    with:"50%",
    marginLeft: "1%"
}
const customStyle = {
    fontFamily: "Sacramento, cursive",
    fontSize: "5rem",
    color: "pink",
    margin: "1%"
}
const bioAndprofession = {
    color: "white",
    lineHeight: "1.7",
    fontSize: "1.3rem",
    fontWeight: "normal",
}

export default class Profile extends Component {
  constructor(props){
    //   console.log("Profile.js constructor");
      super(props);
      this.state ={ 
         fullName: "Radhia Mouna Sellami",
         bio:"I learned Automation and Industrial Computing & a Fullstack JS. I will be able to develop both front-end and back-end web applications. I have a dual skills in programing / electric / electronic / automation and I realy love programming",
         profession:"Senior Technician in Automation and Industrial Computing & I’ll be a super web developer",
      };
  }

  componentDidMount(){ console.log("Profile.js componentDidMount") }
 
  render() {
        return (
            <div style={position} type="Person">
                <img style={{marginBottom:"7%", width:"37%", borderRadius:"50%"}} src='/ProfilePhoto.jpg' alt='My pic Profile'/>
                <div style={description}>
                  <h1 style={customStyle}>{this.state.fullName}</h1>
                  <h2 style={bioAndprofession}>{this.state.bio}</h2>
                  <p style={bioAndprofession}>{this.state.profession}</p>
                </div>
            </div>  
         )
    }
}
import React, { Component } from 'react';
import './About.css';
import srcAboutFullStack from '../../res/AboutFullStack-src.png';

export default class About extends Component {
    constructor(props){
        //   console.log("About.js constructor");
          super(props);
          this.state ={ 
            firstName:'Slim',
            lastName:'Amdouni',
          };
      }
  render() {
    return (
        <div style={{border:'solid 1px black', maxWidth:'100vw', margin:'1% 7% 7%', display:'flex', height:553, borderRadius:'3%'}}>
            <div style={{width:'30%', padding:'7% 3%', backgroundColor:'#9beaf9', borderRadius:'3% 0 0 3%'}}>
                <h1 className='title red size'>Join our magic class with {this.setState.firstName} {this.setState.lastName}</h1>
                <h4 className='red weight'>Let's dive into web development to build your website or your web application. Let's get started our course.</h4>
            </div>
            <img src={srcAboutFullStack} alt='Pic full stack' style={{width:'70%', borderRadius:'0 3% 3% 0'}}/>
        </div>
   );
  }
}
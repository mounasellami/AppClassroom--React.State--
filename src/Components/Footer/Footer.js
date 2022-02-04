import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
   constructor(props){
      super(props);
      this.state = {
        firstName:'Slim',
        lastName:'Amdouni'
      }
   }
  render() {
    return (
        <div>
           <footer style={{marginTop:"7%"}}>
             Copyright &copy; {new Date().getFullYear()} Classroom with {this.setState.firstName} {this.setState.lastName}
           </footer>
        </div>
    )
  }
}
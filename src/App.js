import React, { Component } from 'react';
import "./App.css";
import Header from './Components/Header/Header';
import Profile from './Components/Profile';
import About from './Components/About/About';
import SearchBox from './Components/SearchBox/SearchBox';
import Footer from './Components/Footer/Footer';

const stylebutton = {
  // position: "absolute", 
  // height:47, left:793, 
  // bottom:137, 
  marginTop:"7.3%",
  fontSize:"237%", 
  // backgroundClip:"linear-gradient(to top, #ffe838, #fd57bf)",
  WebkitBackgroundClip: "text", /*change backgroundColor just for the text */
  WebkitTextFillColor: "transparent", /*change Color just for the text */
}

export default class App extends Component {
  constructor(props){
    console.log("App.js constructor");
    super(props);
    this.state={ show:true };
  };

  // componentDidMount(){ console.log("App.js componentDidMount") }

  render(){
    // console.log("App.js render")
    return(
      <div>
          <Header />
        <div className='Singn-in'>
          <button style={stylebutton} onClick={ ()=>this.setState({show: !this.state.show}) }>Sign in </button>
          { this.state.show && <Profile />}
        </div>
          <About />
          <SearchBox />
          <Footer />
     </div>
    )
  }
} 
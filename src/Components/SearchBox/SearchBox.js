import React, { Component } from 'react';
import './SearchBox.css';
import srcKnowledgeMakeTheWorldBetterPlace from '../../res/KnowledgeMakeTheWorldBetterPlace-src.png';

export default class SearchBox extends Component {
  constructor(props){
   //   console.log("SearchBox.js constructor")
     super(props);
     this.state={
      date: new Date(),
      firstName:'Slim',
      userName:'Mouna'
     };
   }

   tick() {  this.setState({ date: new Date() }) }

   componentDidMount() { this.timerID = setInterval( () => this.tick(), 1000 ) }
   // componentWillUnmount() { clearInterval(this.timerID); }
   // componentDidMount(){ console.log("SearchBox.js componentDidMount")}
   // componentWillUnmount(){ console.log("SearchBox.js componentWillUnmount")}

   render() {
      return (
         <div>
            <div style={{color:"white"}}>
               <h1>Hello, into our classroom.</h1>
               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            
            <form style={{margin:'0 0 0 3%', display:'flex', flexDirection:'column'}}> 
               <div style={{display:'flex'}}>              
                  <input className='Box-Input' type="search" placeholder={this.props.show? `${this.state.userName} whrite your question !` : "Whrite your question" }/>
                  {console.log(this.state.show)}
                  <button className='btn-Search'>Send it to {this.state.firstName} </button>
               </div>
               <div style={{display:'flex'}}>
                  <textarea name="message" value={"The answer of Slim."} readOnly={true} />
                  <img src={srcKnowledgeMakeTheWorldBetterPlace} 
                       alt='Knowledge Make The World Better Place' 
                       style={{margin:'2.3% 0 0 41%'}} 
                  />
               </div>
            </form>
         </div>
     )
  }
}
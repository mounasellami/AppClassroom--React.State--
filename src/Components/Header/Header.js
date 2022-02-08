import React, { Component } from 'react';
import './Header.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Header extends Component {
  constructor(props){
    //   console.log("Header.js constructor")
      super(props);
      this.state={ img:'/JoinOurClassroom-pub.png' };
    }
    handleClick=()=>this.setState({img: '/ProfilePhoto.jpg'})

  render() {
    return (
      <header>
        <Navbar bg='dark'
                variant='dark'
                sticky='top'
                expand='lg' //sm resposive
                collapseOnSelect
                style={{padding:'0% 13%'}}
        >
        <Navbar.Brand>
          <img src='/LearningIsLightOfYourLife-pub.png' //'https://avatars1.githubusercontent.com/u/6853419?s=280&v=4'
               width='40px'
               height='40px'
               alt='Logo Classroom'
          />
          <br/> Classroom <br/>with Slim Amdouni
        </Navbar.Brand>
        <Navbar.Toggle className='coloring'/>
        <Navbar.Collapse>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href='#Home'>Home</Nav.Link>
            <Nav.Link href='#About'>About</Nav.Link>
            <Nav.Link href='#Courses'>Courses</Nav.Link>
            <Nav.Link href='#Videos'>Videos</Nav.Link>
            <Nav.Link href='#Meet'>Meet</Nav.Link>
            <Nav.Link href='#Components'>Ask</Nav.Link>
          </Nav>
          <Nav>
          
          {/* <button onClick={this.handleClick}>Sign-in</button>  */}
            <NavDropdown title='Join our classroom' className='justify-content-end' > 
              <div className='image-join'>
                <img src={this.props.show? "/ProfilePhoto.jpg" : "/JoinOurClassroom-pub.png"  }   // '/JoinOurClassroom-pub.png'
                     width='40px'
                     height='40px'
                     style={{display:'flex', JustifyContent:'center', borderRadius:'50%', marginLeft:'1%'}}
                     alt='Logo Join our classroom'
                /> 
                <NavDropdown.Item href='#Be with us/Sign in'>Sign in</NavDropdown.Item>
                <NavDropdown.Item href='#Be with us/Register'>Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#Be with us/Contact Us'>Contact us</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    )
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SearchBox from './Components/SearchBox/SearchBox'
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
    <React.StrictMode>   
      <App /> 
      {/* <SearchBox />   */}
    </React.StrictMode> , 
    document.getElementById('root') );

reportWebVitals();

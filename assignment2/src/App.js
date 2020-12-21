import React, { Component } from 'react';
import './App.css'
import Routes from './Routes';

export default class App extends Component{

  render(){
    return(
      
      <div style={{textAlign:'center'}}>
          <Routes/>
      </div>
    );
  }
}
import React from 'react';
import './App.css';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {Header} from './components/Header/Header';
//import Calculator from './Calculator/Calculator';
//import Form from './components/Form'
export default class App extends React.Component{
  render(){
    return(
       <>
    <Header />
    <MainTogl />
       </>
      )
  }
  }
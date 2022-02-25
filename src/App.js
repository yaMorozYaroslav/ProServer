import React from 'react';
import './App.css';
import MainTogl from './MainCont/MainTogl';
import {Header} from './components/Header'
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
import React from 'react';
import './App.css';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {Header} from './components/Header/Header';

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
import React from 'react';
import './App.css';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {Header} from './components/Header/Header';
import {UseEffect} from './components/UseEffect';
//import {Listener} from './components/Listener';
export default class App extends React.Component{
  render(){
    return(
       <>
    <Header />
    <MainTogl />
    <UseEffect />
       </>
      )
  }
  }
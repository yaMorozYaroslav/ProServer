import React from 'react';
import './App.css';
import {Switer} from './components/Switer';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {Header} from './components/Header/Header';
import {UseEffect} from './components/UseEffect/UseEffect';
//import {Listener} from './components/Listener';
export default class App extends React.Component{
  render(){
    return(
       <>
    <Header />
    <MainTogl />
    <UseEffect />
    <Switer />
       </>
      )
  }
  }
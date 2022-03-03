import React from 'react';
import {render} from 'react-dom';
import {Header} from'./HeadFoot/Header/Header';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {UseEffect} from './storage/UseEffect/UseEffect';
import {Timer} from './storage/Timer';

const App=()=>{
  return(
    <>
  <Header />
  <MainTogl/>
  <UseEffect/>
  <Timer/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
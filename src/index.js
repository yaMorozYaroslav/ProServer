import React from 'react';
import {render} from 'react-dom';
import {Header} from'./HeadFoot/Header/Header';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {UseEffect} from './storage/UseEffect/UseEffect';

const App=()=>{
  return(
    <>
  <Header />
  <MainTogl/>
  <UseEffect/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
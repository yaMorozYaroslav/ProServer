import React from 'react';
import {render} from 'react-dom';
import {Header} from'./HeadFoot/Header/Header';
import {UseEffect} from './storage/UseEffect/UseEffect';
import {Layout} from './Options/Layout/Layout';
import MainTogl from './Gateway/MainTogl/MainTogl';
const App=()=>{
  return(
    <>
  <Header />
  <UseEffect/>
  <MainTogl/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
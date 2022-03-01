import React from 'react';
import {render} from 'react-dom';
import {Header} from'./HeadFoot/Header/Header';
import MainTogl from './Gateway/MainTogl/MainTogl';
const App=()=>{
  return(
    <>
  <Header />
  <MainTogl/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
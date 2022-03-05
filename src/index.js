import React from 'react';
import {render} from 'react-dom';
import {DuoHead} from'./HeadFoot/DuoHead/DuoHead';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {Footer} from './HeadFoot/Footer/Footer';


const App=()=>{
  return(
    <>
  <DuoHead />
  <MainTogl/>
  <Footer/>
    </>
    )
  }
render(<App/>, document.getElementById('root'));
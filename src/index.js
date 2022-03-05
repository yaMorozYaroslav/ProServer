import React from 'react';
import {render} from 'react-dom';
import {DuoHead} from'./HeadFoot/DuoHead/DuoHead';
import MainTogl from './Gateway/MainTogl/MainTogl';
//import {UseEffect} from './storage/UseEffect/UseEffect';
import {Func} from './storage/Func';
import {Footer} from './HeadFoot/Footer/Footer'

const App=()=>{
  return(
    <>
  <DuoHead />
  <MainTogl/>
  <Footer/>
  <Func/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
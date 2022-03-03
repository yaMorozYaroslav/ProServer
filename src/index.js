import React from 'react';
import {render} from 'react-dom';
import {DuoHead} from'./HeadFoot/DuoHead/DuoHead';
import MainTogl from './Gateway/MainTogl/MainTogl';
import {UseEffect} from './storage/UseEffect/UseEffect';
import {Delay} from './storage/Delay';

const App=()=>{
  return(
    <>
  <DuoHead />
  <MainTogl/>
  <UseEffect/>
  <Delay/>
    </>
    )
}
render(<App/>, document.getElementById('root'));
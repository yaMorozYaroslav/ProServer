import React from 'react';
import {render} from 'react-dom';
import {Header}from './HeadFoot/Header/Header';
const App=()=>{
  return(
  <Header />
    )
}
render(<App/>, document.getElementById('root'));
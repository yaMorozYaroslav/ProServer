import React, {useState} from 'react';
import {useEff} from './useEff';

export function Projects(){
 return (<>
 <Project1/>
 <Project2/>
        </>)
}
 function Project1(){
 	const [useRef, open] = useEff();
 	return <div ref={useRef}>{open?<h1>dick</h1>: 'dick'}</div>
 }
 function Project2(){
 	const [useRef, open] = useEff();
 	return <div ref={useRef}>{!open?<h1>tick</h1>: 'pick'}</div>
 }
  function Project3(){
 	const [useRef, open] =  useEff();
 	return <div ref={useRef}>{!open?<h1>tick</h1>: 'pick'}</div>
 }
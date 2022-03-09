import React, {useState} from 'react';
import styles from './Projects.module.css';
import {useEff} from './useEff';
import start from './start.png';

export function Projects(){
 return (<div className={styles.store}>
 <Project1/>
 <Project2/>
 <Project3/>
        </div>)
}
 function Project1(){
 	const [useRef, open] = useEff();
 	return <div 
              ref={useRef}>
             {!open
              ? <h1 className={styles.box}>dick</h1>
              : <img className={styles.start} src={start}/>}</div>
 }
 function Project2(){
 	const [useRef, open] = useEff();
 	return <div className={styles.box} ref={useRef}>
          {!open
              ? <h1 className={styles.box}>dick</h1>
              : <img className={styles.start} src={start}/>}</div>
 }
  function Project3(){
 	const [useRef, open] =  useEff();
 	return <div className={styles.box} ref={useRef}>
               {!open
              ? <h1 className={styles.box}>dick</h1>
              : <img className={styles.start} src={start}/>}</div>
       }
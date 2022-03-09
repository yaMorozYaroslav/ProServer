import React, {useState} from 'react';
import styles from './Projects.module.css';
import {useEff} from './useEff';
import stark from './stark.png';

export function Projects(){
 return (<div className={styles.store}>
 <Project1/>
 <Project2/>
 <Project3/>
        </div>)
}
 function Project1(){
 	const [useRef, open] = useEff();
 	return <div className={styles.target}
              ref={useRef}>
             {!open
              ? <div className={styles.box}>dick</div>
              : <div className={styles.sources}><button>Heroku</button>
                                                
                                                <a href="https://github.com/yaMorozYaroslav/MERNAuth">href</a></div>

                

       }</div>
 }
 function Project2(){
 	const [useRef, open] = useEff();
 	return <div className={styles.target} 
                   ref={useRef}>
          {!open
              ? <div className={styles.box}>dick</div>
              : <img className={styles.stark} src={stark}/>}</div>
 }
  function Project3(){
 	const [useRef, open] =  useEff();
 	return <div className={styles.target} ref={useRef}>
              {!open
              ? <div className={styles.box}>dick</div>
              : <img className={styles.stark} src={stark}/>}</div>
       }
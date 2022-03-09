import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Projects.module.css';
import {useEff} from './useEff';
import stark from './stark.png';
import {Strings} from './Strings';

export function Projects(){
 return (<div className={styles.store}>
 <Project1/>
 <Project2/>
 <Project3/>
        </div>)
}
 function Project1(){
 	const [useRef, open] = useEff();
       const [text1, text2] = Strings();
 	return <div className={styles.target}
              ref={useRef}>
             {!open
              ? <div className={styles.box}>dick</div>
              : <> 
              <ul className={styles.linkcont}>
                <li>
                <Link className={styles.link} to="/heroku">Heroku</Link>
                </li>
                <li>
                <Link className={styles.link} to="/github">GitHub</Link>
                </li>
               </ul>
               <div className={styles.text}>{text1}</div>
                </>}
                
              </div>        

       
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
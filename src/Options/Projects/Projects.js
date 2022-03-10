import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Projects.module.css';
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
       const [text1, text2] = Strings();
       const [hover, handHov, handOut] = Toggler();
 	return ( <div className={styles.target}>
              <ul  onMouseOver={handHov} onMouseOut={handOut} className={styles.linkcont}>
                <li >
                <Link className={styles.link} to="/heroku">Heroku</Link>
                </li>
                <li >
                <Link className={styles.link} to="/github">GitHub</Link>
                </li>
               </ul>
               <div className={styles.text}>{hover?text1:null}</div>
              </div>  );      

       
 }
 function Project2(){
       const [text1, text2] = Strings();
 	const [hover, handHov, handOut] = Toggler();
   return <div className={styles.target} onMouseOver={handHov} onMouseOut={handOut}>
                 <div>
                 <img className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{text2}</div>
                  :null}
                </div>
           }
          </div>
 }
  function Project3(){
       const [text1, text2] = Strings();
 	const [hover, handHov, handOut] =  Toggler();
 	return <div className={styles.target} onMouseOver={handHov} onMouseOut={handOut}>
               <div>
                 <img className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{text2}</div>
                  :null}
                </div>}

              </div>
       }
 function Toggler(){
       const [hover, setHover] = React.useState(false);
       const handHov = () => setHover(true);
       const handOut = () => setHover(false);
       return [hover, handHov, handOut]
 }
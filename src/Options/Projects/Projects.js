import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Projects.module.css';
import stark from './stark.png';
import * as strings from './strings';
import schema from "./schema.png";

export function Projects(){
 return (<><div className={styles.store}>
 <Project1/>
 <Project2/>
 <Project3/>
        </div>
 <img src={schema} alt="strip" className={styles.schema}/></>)
}
 function Project0(){
     const Heroku = () =>{
       const [hover, handHov, handOut] = Toggler();
       return (<div className={styles.linkcont1} onMouseOver={handHov} onMouseOut={handOut}>
                <Link className={styles.linkher} to="/heroku">Heroku</Link>
                <div className={styles.texther}>{hover?strings.text1:null}</div>
               </div>
               );
     }
     const GitHub = () =>{
           const [hover, handHov, handOut] = Toggler();
           return(<div 
                    className={styles.linkcont2} 
                    onMouseOver={handHov} 
                    onMouseOut={handOut}>
                     <Link className={styles.linkgit} to="/github">GitHub</Link>
                     <section className={styles.textgit}>{hover?strings.text2:null}</section>
                  </div>
                );
     }
 	return ( <div className={styles.target}>
               <Heroku/>
               <GitHub/>
               
              </div>  );      

       
 }
 function Project1(){
 	const [hover, handHov, handOut] = Toggler();
   return <div className={styles.target} >
                 <img onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
          </div>
 }
  function Project2(){
 	const [hover, handHov, handOut] =  Toggler();
 	return <div className={styles.target} >
                 <img onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
  function Project3(){
    const [hover, handHov, handOut] =  Toggler();
    return <div className={styles.target} >
                 <img onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
  function Project4(){
    const [hover, handHov, handOut] =  Toggler();
    return <div className={styles.target} >
                 <img onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
              </div>
       }
 
 function Toggler(){
       const [hover, setHover] = React.useState(false);
       const handHov = () => setHover(true);
       const handOut = () => setHover(false);
       return [hover, handHov, handOut]
 }
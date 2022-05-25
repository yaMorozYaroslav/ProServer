import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Projects.module.css';
import stark from './stark.png';
import * as strings from './strings';
import schema from "./schema.png";

export function Projects(){
 return (<><div 
             className={styles.store} 
             style={{display: 'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>
 <Project0/>
 <Project1/>
 <Project2/>
 <Project3/>
 <Project4/>
        </div>
 <img src={schema} alt="" className={styles.schema}/></>)
}
 function Project0(){
     const Netlify0 = () =>{
       const [hover, handHov, handOut] = Toggler();
       return (<div className={styles.linkcont1} onMouseOver={handHov} onMouseOut={handOut}>
                <Link className={styles.linkher} to="/netlify0" target="blank">Netlify</Link>
                <div className={styles.texther}>{hover?strings.text0:null}</div>
               </div>
               );
     }
     const GitHub0 = () =>{
           const [hover, handHov, handOut] = Toggler();
           return(<div 
                    className={styles.linkcont2} 
                    onMouseOver={handHov} 
                    onMouseOut={handOut}>
                     <Link className={styles.linkgit} to="/github0" target="blank">GitHub</Link>
                     <section className={styles.textgit}>{hover?strings.text2:null}</section>
                  </div>
                );
     }
 	return ( <div className={styles.target}>
               <Netlify0/>
               <GitHub0/>
               
              </div>  );      

       
 }
 function Project1(){
 	const Netlify1 = () =>{
       const [hover, handHov, handOut] = Toggler();
       return (<div className={styles.linkcont1} onMouseOver={handHov} onMouseOut={handOut}>
                <Link className={styles.linkher} to="/netlify1" target="blank">Netlify</Link>
                <div className={styles.texther}>{hover?strings.text1:null}</div>
               </div>
               );
     }
     const GitHub1 = () =>{
           const [hover, handHov, handOut] = Toggler();
           return(<div 
                    className={styles.linkcont2} 
                    onMouseOver={handHov} 
                    onMouseOut={handOut}>
                     <Link className={styles.linkgit} to="/github1" target="blank">GitHub</Link>
                     <section className={styles.textgit}>{hover?strings.text2:null}</section>
                  </div>
                );
     }
    return ( <div className={styles.target}>
               <Netlify1/>
               <GitHub1/>
               
              </div>  ); 
 }
  function Project2(){
 	const [hover, handHov, handOut] =  Toggler();
 	return <div className={styles.target} >
                 <img alt="stark" onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
                       </div>
 }
  function Project3(){
    const [hover, handHov, handOut] =  Toggler();
    return <div className={styles.target} >
                 <img alt="stark" onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
                 {hover
                  ?<div className={styles.text}>{strings.text3}</div>
                  :null}
                       </div>
 }
  function Project4(){
    const [hover, handHov, handOut] =  Toggler();
    return <div className={styles.target} >
                 <img alt="stark" onMouseOver={handHov} onMouseOut={handOut} className={styles.stark} src={stark}/>
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
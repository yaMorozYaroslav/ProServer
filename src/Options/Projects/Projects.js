import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Projects.module.css'
import * as strings from './extra/strings'

import stark from './images/stark.png'
import schema from './images/schema.png'
import atom from './images/atom.png'
import upatom from './images/upatom.png'

import {useSelector, useDispatch} from 'react-redux'
import {linkClick, noClick} from '../../Redux/actions/welcAct'
import {getMessages} from '../../Redux/actions/messAct'

export function Projects(){
	 const welcState = useSelector((state) => state.welc)
	const dispatch = useDispatch()
  React.useEffect(()=>{
        const time = setTimeout(()=>dispatch(linkClick()),7000)
        return () => {clearTimeout(time)}
     }, [])
     console.log(welcState) 
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
     const [cover, setCover] = React.useState(false)
     const handCov =()=> setCover(true)
     const handNo =()=> setCover(false)
     React.useEffect(()=>{
        const time = setTimeout(()=>{handNo()},7000)
        return () => {clearTimeout(time)}
     }, [cover])
     const Netlify0 = () =>{
       const [hover, handHov, handOut] = Toggler();
       return (<div className={styles.linkcont1} onMouseOver={handHov} onMouseOut={handOut}>
                <Link className={styles.linkher} to="/netlify0" target="blank">Netlify</Link>
                <div className={styles.texther}>{hover?strings.text0:null}</div>
               </div>
               );
     }
     const GitHub0 = () =>{
		   const dispatch = useDispatch()
           const [hover, handHov, handOut] = Toggler();
           return(<div 
                    className={styles.linkcont2} 
                    onMouseOver={handHov} 
                    onMouseOut={handOut}>
                     <Link 
                     className={styles.linkgit} to="/github0" target="blank"
                     >GitHub</Link>
                     <section className={styles.textgit}>{hover?strings.text2:null}</section>
                  </div>
                );
     }
 	return ( <div onMouseOver={handCov} className={styles.target}>
              {cover?<>
               <Netlify0/>
               <GitHub0/>
              </>
              :<img alt="stark" className={styles.atoms} src={atom}/>}
              </div>  );      

       
 }
 function Project1(){
    const [cover, setCover] = React.useState(false)
     const handCov =()=> setCover(true)
     const handNo =()=> setCover(false)
     React.useEffect(()=>{
        const time = setTimeout(()=>{handNo()},7000)
        return () => { clearTimeout(time)}
     }, [cover])

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
    return ( <div onMouseOver={handCov} className={styles.target}>
              {cover?<>
               <Netlify1/>
               <GitHub1/>
              </>
              :<img alt="stark" className={styles.atoms} src={upatom}/>}
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

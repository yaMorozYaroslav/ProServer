import React, {useState, useEffect} from 'react'
import pic from './eye.png';
import styles from './Side.module.css';
export function SideCont(){
   const [show, setShow] = React.useState(false)
   
   React.useEffect(()=>{
   	const timeout = setTimeout(()=>{
   		                                                   setShow(true)
   	     }, 400)
  	return()=>clearTimeout(timeout)
         }, [show])
   if(!show)return null
   
    return (<section>
                 <h1 className={styles.picture}> </h1>
                 <img className={styles.foot} alt="eye" src={pic} />
                           </section>)

}

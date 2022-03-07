import React, {useState, useEffect} from 'react';
import styles from './Side.module.css';
export function SideCont(){
  const [pic, setPic] = useState(false);
  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setPic(true)
    }, 800)
    return()=>clearTimeout(timeout)
  }, [pic])
  if(!pic) return null 
           return <h1 className={styles.picture}></h1>

}

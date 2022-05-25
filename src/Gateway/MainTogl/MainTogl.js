import React from 'react';
import styles from './MainTogl.module.css'
import {Router} from '../Router/Router';
import {SideCont} from '../../DuoSide/SideCont/SideCont';
import {PsFoot} from '../../DuoSide/PsFoot/PsFoot';
import img from './touch.png';

export function MainTogl(){
   const [hover, setHover] = React.useState(false);
   const handHov = () => setHover(true);
   React.useEffect(()=>{
      const timer = setTimeout(()=>{setHover(true)},1000)
      return()=>clearTimeout(timer)
   }, [hover])
   return <>{!hover
             ?<div className={styles.cont} >
             <img className={styles.red} onMouseEnter={handHov} alt='toggler' src={img}/>
             </div>
             :
        
             <div className={styles.mainside}>

                  <div className={styles.unit1}><Router/></div>
             <div className={styles.sidecont}>
                  <div className={styles.unit2}><SideCont/></div>
                  <div className={styles.unit3}> <PsFoot/></div>
             </div>
                 
             </div>
       }
          </>
} 




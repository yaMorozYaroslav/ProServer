import React from 'react';
import styles from './MainTogl.module.css'
import {Router} from '../Router/Router';
import {SideCont} from '../../DuoSide/SideCont/SideCont';
import {PsFoot} from '../../DuoSide/PsFoot/PsFoot';
import img from './touch.png';
import {useSelector} from 'react-redux'

export function MainTogl(){
   const welcState = useSelector((state) => state.welc)
 
   const [hover, setHover] = React.useState(false);
   const handHov = () => setHover(true);
  /* const welcState = useSelector((state) => state.welc)
	const dispatch = useDispatch()
  React.useEffect(()=>{
        const time = setTimeout(()=>dispatch(linkClick()),7000)
        return () => {clearTimeout(time)}
     }, [])
     console.log(welcState) 
   React.useEffect(()=>{
      const timer = setTimeout(()=>setHover(true),1000)
      return()=>clearTimeout(timer)
   }, [hover]) */
   return <> 
        
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




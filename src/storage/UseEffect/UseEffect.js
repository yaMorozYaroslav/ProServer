import React, {useState, useEffect, useRef} from 'react';
import styles from './UseEffect.module.css'	
export function UseEffect(){
	const [refHov, hovered] = usePast();
	return <h1 className={hovered
		               ?styles.active
		               :styles.unactive} ref={refHov}> Human</h1>;
}
function usePast(){
	const [hover, setHov] = useState(false);
	const path = useRef(null);
	const handOver=()=>setHov(true);
	const handOut=()=>setHov(false);

useEffect(()=>{
	const refObj = path.current
	if(refObj){
		refObj.addEventListener("mouseover", handOver);
		refObj.addEventListener("mouseout", handOut);

	  return()=>{
	  	refObj.removeEventListener("mouseover", handOver);
	  	refObj.removeEventListener("mouseout", handOut);
	  };
	}
}, [path.current]);

  return[path, hover];
}
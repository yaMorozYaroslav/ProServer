import React, {useState, useEffect} from 'react';
import styles from './Side.module.css';
export function SideCont(){
	const [click, setClick] = useState(0);

useEffect(()=>{
   console.log({click});
},[]);
	return (
    <>
      <h1 onClick={(()=>setClick(click=>click+1))}>{click}</h1>
      <img className={styles.img} src="https://static.wixstatic.com/media/3b5532_28aa25bb239f45609d76bbff8166ee5c~mv2.png/v1/fit/w_517%2Ch_375%2Cal_c/file.png"/>
    </>
		);	
}

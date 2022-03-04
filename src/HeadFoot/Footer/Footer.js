import React from 'react';
import styles from './Footer.module.css';

export function Footer(){
  const [useRef, click] = useSomething();  
  return <div ref={useRef}>{click?<h1>Hello</h1>:<h1>Bye</h1>}</div>
}
 function useSomething(){
 const [it, setIt] = React.useState(false);
 const handIt = () => setIt(true);
 const useRef = React.useRef(null);
  React.useEffect(()=>{
  	const click = useRef.current;
  	if(click){
  		click.addEventListener("mouseclick", handIt);
  	  return()=>{
        click.removeEventListener("mouseclick", handIt);
  	 };
  	}
  },[useRef.current]);
	return [useRef, it];
}
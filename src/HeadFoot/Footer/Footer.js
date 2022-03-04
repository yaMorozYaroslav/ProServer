import React from 'react';
import styles from './Footer.module.css';

export function Footer(){
  const [useRef, click] = useSomething();  
  return <div ref={useRef}>{click?<h1>Hello</h1>:<h1>Bye</h1>}</div>
}
 function useSomething(){
 const [it, setIt] = React.useState(false);
 const handIt = () => setIt(true);
 const handThat = () => setIt(false);
 const useRef = React.useRef(null);
  React.useEffect(()=>{
  	const click = useRef.current;
  	if(click){
  		click.addEventListener("click", handIt);
  		click.addEventListener("click", handThat);
  	  return()=>{
        click.removeEventListener("click", handIt);
        click.removeEventLIstener("click", handThat);
  	 };
  	}
  },[useRef.current]);
	return [useRef, it];
}
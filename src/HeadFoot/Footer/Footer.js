import React from 'react';

export function Footer(){
	const [refRoad, clicked] = useSome();
	return <h1 ref={refRoad}>{clicked?'name':'second'}</h1>
}
 
 function useSome(){
  const [click,setClick] = React.useState(false);
  const road = React.useRef(null);
  const haClick = () => { setClick(!click);}
  React.useEffect(()=>{
  const refRo = road.current
  if(refRo){
    refRo.addEventListener("click", haClick);
    return()=>{
    	refRo.removeEventListener("click", haClick);
    }
   }
  },[road.current])
	return [road, click]
}
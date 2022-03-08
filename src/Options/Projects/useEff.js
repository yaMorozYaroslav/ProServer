import React from 'react';

export function useEff(){
	const[show, setShow] = React.useState(false);
	const road = React.useRef(null);
	const handOver = () => setShow(true);
	const handOut = () => setShow(false);

  React.useEffect(()=>{
  	const refer = road.current;
  	if(refer){
  	refer.addEventListener('mouseover', handOver);
  	refer.addEventListener('mouseout', handOut);
  	return()=>{
  	refer.removeEventListener('mouseover', handOver);
  	refer.removeEventListener('mouseout', handOut);
  	 }
  	}
  },[road.current])
  return[road, show]
}
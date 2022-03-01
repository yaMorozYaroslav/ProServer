import React, {useState, useEffect} from 'react';
  export function Counter(){
  	const [count, setCount] = useState(0);

  	useEffect(()=>{
  		const id = setInterval(()=>{
  			setCount(c=>c+1);
  		}, 2000);
  	  return () => clearInterval(id);
  	},[]);
   return <h1>{count}</h1>;
  }
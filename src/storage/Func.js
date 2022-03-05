import React from 'react';

export function Func(){
const array = ["bird", "dog", "ex"];
const arr = Math.floor(Math.random() * array.length);
//console.log(arr, array[arr])
return <>{(arr, array[arr])}</>
}

function useSome(){
  const [over, setOver] = React.useState(0);
  const path = React.useRef(null);
  const handOver = () => setOver(over + 1 * 3);

React.useEffect(()=>{
  const useRef = path.current;
  if(useRef){
    useRef.addEventListener('mouseover', handOver);
    return()=>{
      useRef.removeEventListener('mouseover', handOver);
    }
  }
}, [path.current])
 return [path, over]
}
import React from 'react';

export function Func(){
const [refHov, overIt] = useSome();

return <div ref={refHov}>{overIt?'okay':'puk'}</div>
}

function useSome(){
  const [over, setOver] = React.useState(false);
  const path = React.useRef(null);
  const handOver = () => setOver(true);
  const handOut = () => setOver(false);

React.useEffect(()=>{
  const useRef = path.current;
  if(useRef){
    useRef.addEventListener('mouseover', handOver);
    useRef.addEventListener('mouseout', handOut)
    return()=>{
      useRef.removeEventListener('mouseover', handOver);
      useRef.removeEventListener('mouseout', handOut)
    }
  }
}, [path.current])
 return [path, over]
}
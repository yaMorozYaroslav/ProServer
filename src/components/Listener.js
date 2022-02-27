import React, {useState, useEffect, useRef} from 'react';
export function Listener(){
    const [hoverRef, isHovered] = useHover();

    return<div ref={hoverRef}>{isHovered?"Go out"
                                        :"Touch"}</div>;
}
function useHover(){
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver=()=>setValue(true);
    const handleMouseOut=()=>setValue(false);

useEffect(
   ()=>{
    const something = ref.current;
    if(something){
        something.addEventListener("mouseover", handleMouseOver);
        something.addEventListener("mouseout", handleMouseOut);

    return()=>{
        something.removeEventListener("mouseover", handleMouseOver);
        something.removeEventListener("mouseout", handleMouseOut);
     };
    }
   },
  [ref.current]
   );
 return[ref, value];
}
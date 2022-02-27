import React from 'react';
export function App(){
    const [hoverRef, isHovered] = useHover();

    return<div ref={hoverRef}>{isHovered?"12":"13"}</div>;
}

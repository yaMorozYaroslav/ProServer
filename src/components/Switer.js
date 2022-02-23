import React from "react";
export function Switer(){
	const [myState, setMyState] = React.useState(0);

	const listener = () => {
		console.log(`${myState}`);
	};
	React.useEffect(()=>{
		window.addEventListener("dblclick", listener);
	},[]);
	return (
   <div className="Switer">
      <h1>State: {myState}</h1>
      <button onClick={()=>setMyState(myState + 1)}>
         updateState</button>
    </div>
		)
}
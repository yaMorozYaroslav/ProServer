import React from "react";
export function Switer(){
	const [myState, setMyState] = React.useState(0);

	const listener = () => {
		console.log(`${myState}`);
	};
	React.useEffect(()=>{
		window.addEventListener("dbclick", listener);
	},[]);
	return (
   <div className="App">
      <h1>State: {myState}</h1>
      <button onCkick={()=>setMyState(myState + h1)}>
         updateState</button>
		)
}
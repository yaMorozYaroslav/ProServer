import React from 'react';
  function TwoIn(props){
  	return(
  <div className="TwoIn">
    <div className="TwoIn-one">
       {props.one}
    </div>
    <div className="TwoIn-right">
      {props.two}
    </div>
   </div>
  		);
       }
  export function Switer(){
  	return(
  	   <TwoIn
  	      one={<button>One</button>}
           two={<button>Two</button>} />
           );
       }
  
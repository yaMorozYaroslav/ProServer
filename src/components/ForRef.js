import React, {Component} from 'react';
import {render} from 'react-dom';
const TextInput = React.forwardRef((props, ref)=>(
<input type="text" placeholder="Hello World" ref={ref} />
	));

const inputRef = React.createRef();
export default class ForRef extends Component {
	handleSubmit = e => {
		e.preventDefault();
		console.log(inputRef.current.value);
	};
	render(){
 return(
    <div>
     <form onSubmit={e => this.handleSubmit(e)}>
     <TextInput ref={inputRef} />
     <button>Submit</button>
     </form>
    </div>
 	);
  }
}


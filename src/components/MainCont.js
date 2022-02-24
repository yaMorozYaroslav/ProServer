import React from 'react';

export default class MainCont extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {isVirgin: true}
	}
	handleClick(){
		this.setState({isVirgin: false})
	}
	render(){
	    const isVirgin = this.state.isVirgin;
		let choice;
		if(isVirgin){
 choice = <button onClick={this.handleClick}>Do it.</button>
		}else{
 choice = <button style={{background:"red"}}>Done</button>
		}
		return <h1>{choice}</h1>
 }
	}

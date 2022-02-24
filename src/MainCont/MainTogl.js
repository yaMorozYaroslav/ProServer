import React from 'react';
import './MainTogl.css'
import {MainCont} from './MainCont';
import {Hover} from '../components/Hover';
export default class MainTogl extends React.Component{
constructor(props){
   	super(props);
   	 this.handleEnter = this.handleEnter.bind(this);
   	 this.state = {isEntered: false}
   }
   handleEnter(){
   	this.setState({isEntered:true})
   }
   render(){
   	const isEntered = this.state.isEntered;
   	let enter;
   	if(!isEntered){
   	enter = <button id="red" onMouseEnter={this.handleEnter}> click</button>
   	}else{
   	enter =	<div><MainCont/></div>
   	}
   	return <div>{enter}</div>
   }
}
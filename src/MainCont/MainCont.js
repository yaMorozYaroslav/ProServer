import React from 'react';
import './MainStyle.css'
import {Hover} from '../components/Hover';
export default class MainCont extends React.Component{
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
   	enter = <div onMouseEnter={this.handleEnter}>g</div>
   	}else{
   	enter =	<h1><Hover /></h1>
   	}
   	return <div>{enter}</div>
   }
}
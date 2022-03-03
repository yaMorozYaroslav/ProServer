import React from 'react';
import styles from './MainTogl.module.css'
import {MainCont} from '../MainCont/MainCont';
import {SideCont} from '../SideCont/SideCont';
//import {Hover} from '../../components/Hover';
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
      //setInterval(()=>this.)
   	const isEntered = this.state.isEntered;
   	let enter;
   	if(!isEntered){
   	enter = <button className={styles.red} onMouseEnter={this.handleEnter}> click</button>
   	}else{
   	enter =	<div className={styles.mainside}>
                  <div className={styles.unit1}><MainCont/></div>
                  <div className={styles.unit2}><SideCont/></div>
                              </div>
   	}
   	return <div>{enter}</div>
   }
}
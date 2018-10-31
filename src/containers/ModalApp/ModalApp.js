import React, { Component } from 'react';

import ViewOne from '../../components/ViewOne/ViewOne';
import ViewTwo from '../../components/ViewTwo/ViewTwo';
import Modal from '../../components/Modal/Modal';


class ModalApp extends Component {
	constructor(){
		super();
		this.state = {
			timer: 0,
			viewOne: true
		}
	}

	componentDidMount(){
		this.doTimerChange();
	}

	doTimerChange = () => {
		this.myTimer = setInterval(()=>{
		this.setState(prevState => ({
			timer: prevState.timer + 1
			}))
		},1000)	
	}

	resetTimer = () => {
			this.setState({timer: 0})
			this.doTimerChange();
			clearInterval(this.myTimer);
	}

	toggleViewOne = () => {
		this.setState({viewOne: true})
		this.resetTimer();
		this.doTimerChange();
	}

	render() {		
		let {timer} = this.state
		if(timer === 10){
			clearInterval(this.myTimer);
			return 	<Modal toggleView={this.toggleViewOne}/>
		}	

		return (
			this.state.viewOne
			?
			<ViewOne /> 
			:
			<ViewTwo />
		)			 
	}
}

export default ModalApp;
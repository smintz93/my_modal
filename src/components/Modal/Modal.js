import React, {Component} from 'react';

import ViewTwo from '../ViewTwo/ViewTwo';
import './Modal.css'

class Modal extends Component {
	constructor(props){
		super(props)
		this.state = {
			modalTimer: 0
		}
	}
	componentDidMount(){
		this.doModalTimer();
	}

	doModalTimer = () => {
		this.modalTimer = setInterval(()=>{
			this.setState(prevState => ({
				modalTimer: prevState.modalTimer + 1
			}))
		},1000)	
	}

	render(){
		const {modalTimer} = this.state
		if(modalTimer === 5) {
			clearInterval(this.modalTimer)
			return <ViewTwo toggleView={this.props.toggleView}/>
		}
			return (
				<div className="modal">
					<h2>I am the Modal</h2>
					<button onClick={this.props.toggleView}>Are you Still There?</button>
				</div>
			);
				
	}
}

export default Modal; 
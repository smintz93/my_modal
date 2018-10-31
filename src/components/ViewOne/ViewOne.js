import React, { Component } from "react";
import Modal from "react-modal";
import "./ViewOne.css";

let secondTimer;

class ViewOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false
    }
  }

  componentDidMount() {
    this.timer();
  }

  timer = () => {
    setTimeout(() => {
      this.setState({ shouldShowModal: true });
      secondTimer = setTimeout(() => {
        this.redirectUser();
      }, 5000);
    }, 10000);
  }

  closeModal = () => {
    clearTimeout(secondTimer);
    this.setState({ shouldShowModal: false }, () => this.timer());
  }

  redirectUser = () => {
    this.props.toggleView();
  }

  render() {
    return (
      <div className="view-one">
        <Modal
          ariaHideApp={false}
	      isOpen={this.state.shouldShowModal}
	      onAfterOpen={this.afterOpenModal}
	      style={{
            content: {
              height: '100px',
              width: '200px',
              left: '350px',
              top: '100px'
            }
          }}
        >
          <button className="still-there" onClick={this.closeModal}>Are you still there?</button>
        </Modal>
        <h2>I am the main view</h2>
      </div>
    );
  }
}

export default ViewOne;

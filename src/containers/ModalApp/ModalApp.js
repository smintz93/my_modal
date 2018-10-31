import React, { Component } from "react";

import ViewOne from "../../components/ViewOne/ViewOne";
import ViewTwo from "../../components/ViewTwo/ViewTwo";

class ModalApp extends Component {
  constructor() {
    super();
    this.state = {
      viewOne: true
    }
  }

  toggleView = () => {
    this.setState({ viewOne: !this.state.viewOne });
  }

  render() {
    return this.state.viewOne ? (
      <ViewOne toggleView={this.toggleView} />
    ) : (
      <ViewTwo toggleView={this.toggleView} />
    );
  }
}

export default ModalApp;

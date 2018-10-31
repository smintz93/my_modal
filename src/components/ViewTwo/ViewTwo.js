import React from "react";

import "./ViewTwo.css";

const viewTwo = (props) => (
  <div className="view-two">
    <h2>Hey, it's the Second View!</h2>
    <button onClick={props.toggleView}>Back to View One</button>
  </div>
);

export default viewTwo;

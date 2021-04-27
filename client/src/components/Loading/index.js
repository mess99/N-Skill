import React from "react";
import { Loader } from "semantic-ui-react";
const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
};
const Loading = () => (
  <div style={loaderStyle}>
    <Loader active inline="centered" />
  </div>
);

export default Loading;

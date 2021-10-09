import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import "semantic-ui-css/semantic.min.css";

const LayoutIndex = (props) => {
  return (
    <Container>
      <Header />
      <div>{props.children}</div>
    </Container>
  );
};

export default LayoutIndex;

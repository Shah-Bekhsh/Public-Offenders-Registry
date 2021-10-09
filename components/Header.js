import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu
      size="huge"
      inverted
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Link route="/">
        <a className="item">Blockchain Offender Registry</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Home</a>
        </Link>
        <Link route="/about">
          <a className="item">About</a>
        </Link>
        <Link route="/references">
          <a className="item">References</a>
        </Link>
        <Link route="/help">
          <a className="item">Help</a>
        </Link>
        <Link route="./offenders/createinstance">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

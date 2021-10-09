import React, { Component } from "react";
import { Card, Button, Container } from "semantic-ui-react";
import Layout from "../components/Layout";
import registry from "../ethereum/registry";
// import record from "../ethereum/record";
import { Link } from "../routes";

class RegistryIndex extends Component {
  static async getInitialProps() {
    const records = await registry.methods.listOffenders().call();
    // const status = await record.methods.status().call();
    //const name = records.con_name;
    return { records: records };
  }

  renderRecords() {
    const items = this.props.records.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/offenders/${address}`}>
            <a>View Record</a>
          </Link>
        ), // Change this from a link to the name of the perp
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Current Records</h3>
          {this.renderRecords()}
        </div>
      </Layout>
    );
  }
}

export default RegistryIndex;

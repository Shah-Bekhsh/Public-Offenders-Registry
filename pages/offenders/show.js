import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";
import record from "../../ethereum/record";
import { Router } from "../../routes";

class RecordShow extends Component {
  static async getInitialProps(props) {
    const currentRecord = record(props.query.address);

    const summary = await currentRecord.methods.getOffender().call();

    return {
      val1: summary[0],
      val2: summary[1],
      val3: summary[2],
      val4: summary[3],
      val5: summary[4],
      val6: summary[5],
    };
  }

  renderCards() {
    const name = this.props.val1;
    const cnic = this.props.val2;
    const zone = this.props.val3;
    const _address = this.props.val4;
    const _fir = this.props.val5;
    const _firDesc = this.props.val6;

    const items = [
      {
        header: name,
        meta: "Name of Offender",
        description:
          "The offender's name is registered as mentioned in police records. Some offenders dont have recorded last names. Some offenders have aliases as well.",
      },

      {
        header: cnic,
        meta: "N.I.C Number",
        description: "Offender's registered National Identity Card number",
      },

      {
        header: zone,
        meta: "Jurisdictional P.S. Zone",
        description: "The zone of Police Station",
      },

      {
        header: _address,
        meta: "Offender's Address",
        description: "Offender's address as registerd in police records",
        fluid: true,
      },

      {
        header: _fir,
        meta: "First Information Report Numbers",
        description:
          "The FIR contains all the charges that the offender has been convicted of.",
        fluid: true,
      },
      {
        header: _firDesc,
        meta: "First Information Report Detailed Information",
        description: "All the detail of the FIR will be addded here.",
        fluid: true,
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Show Particular Record</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default RecordShow;

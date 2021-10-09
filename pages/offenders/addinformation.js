import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Record from "../../ethereum/record";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class NewRecordInfo extends Component {
  state = {
    errorMessage: "",
    blockAddress: "",
    inputName: "",
    inputCNIC: "",
    inputAddress: "",
    inputZone: "",
    inputFIR: "",
    inputDescription: "",
    loading: false,
    pressed: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const record = Record(this.state.blockAddress);

    this.setState({ loading: true, errorMessage: "" });
    try {
      const account = await web3.eth.getAccounts();
      await record.methods
        .addOffender(
          this.state.inputName,
          parseInt(this.state.inputCNIC),
          this.state.inputZone,
          this.state.inputAddress,
          this.state.inputFIR,
          this.state.inputDescription
        )
        .send({ from: account[0] });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Add Offender Record</h1>
        <p>
          Enter all the information of the criminal as mentioned in Police
          records. Please check the information and be advised that registration
          of the criminal's records takes some time and gas.
        </p>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Deployed Record Address</label>
            <Input
              placeholder="Record Object Address on Network"
              value={this.state.blockAddress}
              onChange={(event) =>
                this.setState({ blockAddress: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Offender Name</label>
            <Input
              placeholder="First + Last Name (or Alias)"
              value={this.state.inputName}
              onChange={(event) =>
                this.setState({ inputName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>N.I.C Number</label>
            <Input
              placeholder="ID Number"
              value={this.state.inputCNIC}
              onChange={(event) =>
                this.setState({ inputCNIC: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input
              placeholder="Recorded Address"
              value={this.state.inputAddress}
              onChange={(event) =>
                this.setState({ inputAddress: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>City Zone</label>
            <Input
              placeholder="Police Station Zone"
              value={this.state.inputZone}
              onChange={(event) =>
                this.setState({ inputZone: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>F.I.R Number</label>
            <Input
              placeholder="Recorded FIR Number"
              value={this.state.inputFIR}
              onChange={(event) =>
                this.setState({ inputFIR: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>F.I.R Description</label>
            <Input
              placeholder="Enter here the complete detail of the FIR"
              value={this.state.inputDescription}
              onChange={(event) =>
                this.setState({ inputDescription: event.target.value })
              }
            />
          </Form.Field>
          <Message
            error
            header="Oops! Something went wrong."
            content={this.state.errorMessage}
          />
          <Button
            primary
            loading={this.state.loading}
            onClick={(event) => this.setState({ pressed: event.target.value })}
          >
            Submit
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default NewRecordInfo;

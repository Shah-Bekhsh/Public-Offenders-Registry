import React, { Component } from "react";
import {
  Container,
  Divider,
  Form,
  Button,
  Input,
  Message,
  Grid,
  Segment,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import registry from "../../ethereum/registry";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class NewRecord extends Component {
  state = {
    pressed: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await registry.methods.createRecord().send({
        from: accounts[0],
      });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Container style={{ color: "#125696" }} textAlign="center">
          <h1>Create New Block</h1>
        </Container>
        <Divider />
        <Container>
          <Grid centered padded>
            <p style={{ marginBottom: "20px" }}>
              Press the Create button to create a new instance of the Record
              contract. Each Record Contract is deployed to a unique address on
              the blockchain.
            </p>
          </Grid>
          <Grid centered padded>
            <Button color="red" inverted disabled>
              Important
            </Button>
          </Grid>
        </Container>
        <Container>
          <Grid centered padded>
            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              Creation of a new record invokes our Ethereum Smart Contract. Each
              invocation of the contract requires an amount of Wei and must only
              be carried out from the manager account.
            </p>
          </Grid>
        </Container>
        <Container style={{ marginTop: "20px" }}>
          <Grid centered>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Message
                error
                header="Oops! Something went wrong."
                content={this.state.errorMessage}
              />
              <Button
                loading={this.state.loading}
                color="red"
                onClick={(event) =>
                  this.setState({ pressed: event.target.value })
                }
              >
                Create
              </Button>
            </Form>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default NewRecord;

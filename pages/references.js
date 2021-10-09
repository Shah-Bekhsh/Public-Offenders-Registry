import React from "react";
import { Container, Divider, Grid, Card, Image } from "semantic-ui-react";
import Layout from "../components/Layout";

const ReferencesIndex = () => {
  return (
    <Layout>
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Ethereum</h2>
      </Container>
      <Divider />
      <Container textAlign="justified">
        <Grid centered padded>
          <p>
            Ethereum is a technology that is heavily community centric. It has
            both, a financial arm which provides the necessary architecture and
            technology to support a cryptocurrency, as well an infrastructure
            that allows for the creation of Decentralized Apps. These, dApps,
            are nothing short of a magical technology. Their backend code lives
            and runs on a decentralized network created using the Ethereum
            blockchain. Which means there is no down time to these applications.
            As in ever. Right now, hundreds and thousands of dApps are running
            on the Ethereum network. This project is also a Decentralized
            Application. Our Smart Contract is currently deployed on the Rinkeby
            Network of Ethereum org. To learn more, check out Ethereum.org.
          </p>
          <Image
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=010"
            as="a"
            size="small"
            href="https://ethereum.org/en/"
          />
        </Grid>
        <Divider />
        <Container style={{ color: "#125696" }} textAlign="center">
          <h2>Data</h2>
        </Container>
        <Grid centered padded>
          <p>
            Sindh Police publishes data of Absconders and Proclaimed Offenders
            in various jurisdictions. This data is split in various zones and
            sometimes according to the courts that govern these jurisdictions.
            All the records used in the creation of this application are
            publicly available on Sindh Police’s website{" "}
            <a href="https://sindhpolice.gov.pk/Absconders_POs/absconders_po_sindh_index.html">
              here.
            </a>{" "}
          </p>
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/e/e0/Sindh_Police_Logo.png"
            as="a"
            size="small"
            href="https://sindhpolice.gov.pk/"
          />
        </Grid>
      </Container>
    </Layout>
  );
};

export default ReferencesIndex;

//https://cryptologos.cc/logos/ethereum-eth-logo.png?v=010

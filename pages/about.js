import React from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";

const AboutIndex = () => {
  return (
    <Layout>
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Issues & Challenges</h2>
      </Container>
      <Divider />
      <Container textAlign="justified">
        <Grid padded>
          <p>
            <b style={{ fontSize: "large" }}>Before</b> the idea of this project
            was even penned down on paper, its need was felt throughout our
            country. No system is perfect. The criminal justice system also
            suffers from this problem. No country has a perfect criminal justice
            system. People who are convicted of their crimes are sent to prison
            to serve out their sentences with the hope that when they are
            released back into the society, they will be reformed. As the past
            few years have painfully demonstrated to us, that notion is only
            wishful thinking. Years of systemic decay has created loopholes in
            our reform system. In our society, individuals who have been
            convicted of even the most violent crimes, sometimes walk out of
            prisons and into obscurity. They create false personae and sometimes
            completely alter their identities.{" "}
          </p>
        </Grid>
      </Container>
      <Divider />
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Breaking Point</h2>
      </Container>
      <Divider />
      <Container textAlign="justified">
        <Grid padded>
          <p>
            <b style={{ fontSize: "large" }}>In</b> the past few years, a series
            of high profile incidents shook the nation to its core. The
            grotesque nature of these incidents highlighted a grave shortcoming
            in our criminal reform system. Individuals who had served prison
            sentences and were believed to have become reformed were at the
            center of these heinous crimes. Clearly our belief that all
            criminals being released are reformed was wildly misconceived.
            Therefore it became obvious that oversight of convicts who were
            being released on parole was extremely important. Moreover, it
            became increasingly important that in a system riddled with
            loopholes, public unawareness poses as a great barrier towards an
            apprised and vigilant society.{" "}
          </p>
        </Grid>
      </Container>
      <Divider />
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Goal</h2>
      </Container>
      <Divider />
      <Container textAlign="justified">
        <Grid padded>
          <p>
            <b style={{ fontSize: "large" }}>Even</b> though this is a degree
            completion project, as I researched and worked on its development,
            it has grown extremely close to my heart. I wanted to create a
            solution that could stand the test of time and have limitless
            potential. At the heart of this project are blockchain and Smart
            Contracts. I created this application to store the records of each
            offender in such a way that once added, the information stored could
            never be altered. Additionally, this information is more or less
            immune to external attacks from hackers. Each record is deployed as
            a separate Contract instance that gets stored on the blockchain.
            Another Contract written on top of it, a Registry Contract so to
            speak, keeps track of all the addresses at which each record is
            deployed. Blockchain technology has quickly emerged on the horizon
            of the information storage world as a solution that satisfies many
            people’s concern. Its initial use case was limited to financial
            application, but the underlying principle revolved around the key
            aspect of storing data in a way that its authenticity and security
            were never in question. Utilizing its potential, the Ethereum org.
            decided that along with a financial fork of its blockchain network,
            their implementation would provide a solution for people who wanted
            to harness the power of blockchain in their applications. This
            project also heavily relies on the Smart Contracts technology
            provided by Ethereum. A Smart Contract is a piece of software that
            always lives on the blockchain. Other applications can interact with
            this Contract as well and the information stored within the Contract
            is never altered.
          </p>
        </Grid>
      </Container>
      <Divider />
    </Layout>
  );
};

export default AboutIndex;

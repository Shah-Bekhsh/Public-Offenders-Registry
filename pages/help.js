import React from "react";
import { Container, Divider, Card } from "semantic-ui-react";
import Layout from "../components/Layout";

const HelpIndex = () => {
  return (
    <Layout>
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Emergency</h2>
      </Container>
      <Divider />
      <Container centered>
        <Card
          fluid
          header="Police"
          meta="Helpline: 15"
          description="In case of an emergency, you should always contact the Police first by dialing 15 on your phone. Provide brief and concise information of your problems and be sure to provide accurate information."
        ></Card>
      </Container>
      <Divider />
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Domestic Violence & Child Abuse Helplines</h2>
      </Container>
      <Divider />
      <Container centered>
        <Card.Group centered>
          <Card
            href="http://www.mohr.gov.pk/index"
            header="Ministry of Human Rights (MoHR)"
            meta="Helpline: 1099, 0333-9085709 (WhatsApp)"
            description="MoHR's toll-free helpline deals with individuals facing any form of human rights violations. The service also provides free legal aid."
          ></Card>
          <Card
            href="https://dastakwelfarefoundation.org/home"
            header="Dastak Foundation"
            meta="Helpline: 0333-4161610"
            description="Dastak is centered around providing relief to individuals facing domestic and gender-based violence, it serves to protect women and children by giving them shelter and legal aid."
          ></Card>
        </Card.Group>
      </Container>
      <Divider />
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Mental health</h2>
      </Container>
      <Divider />
      <Container centered>
        <Card.Group centered>
          <Card
            href="https://rozan.org/counseling-services/"
            header="Rozan"
            meta="Helpline: 0304-111-1741 "
            description="Rozan Helpline is a free-of-cost telephonic service which connects you with trained psychologists. In partnership with United Nations Population Fund (UNFPA), Rozan also provides psycho-social services to women and girls who may be facing violence in the wake of the lockdown."
          ></Card>
          <Card
            href="https://ird.global/"
            header="Interactive Research & Development (IRD)"
            meta="Helpline: 0213-7133332"
            description="IRD directs its efforts towards healthcare for all. Its program Pursakoon Zindagi aims to provide access to mental health services to the less privileged. The helpline offers free counselling and sessions for individuals suffering with mental health concerns."
          ></Card>
        </Card.Group>
      </Container>
      <Divider />
      <Container style={{ color: "#125696" }} textAlign="center">
        <h2>Cyber Harassment</h2>
      </Container>
      <Divider />
      <Container centered>
        <Card
          fluid
          href="https://report.iwf.org.uk/pk/"
          header="Digital Rights Foundation"
          meta="Helpline: 0800-39393"
          description="The Digital Rights Foundation aims to provide a safe and secure online environment for all. As the lockdown increases our frequent use of the digital space it also prompts a higher risk for individuals to fall for online fraud and abuse. DRF assists in reporting all forms of online harassment. Check its social media pages for updated information on how to safely navigate your way online."
        ></Card>
      </Container>
      <Divider />
    </Layout>
  );
};

export default HelpIndex;

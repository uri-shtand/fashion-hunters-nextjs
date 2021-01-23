import { Box, Header, Heading, Nav, Text } from "grommet";
import HeaderMenu from "./HeaderMenu";

const FashionHeader = () => (
  <Header align="center" direction="row" justify="start" background={{"color":"black"}} fill="horizontal">
    <Heading>Fashion hunters</Heading>
    <Nav align="center" direction="row">
      <HeaderMenu headerText="Women" />
      <HeaderMenu headerText="Men" />
      <Box
        align="baseline"
        justify="start"
        direction="column"
        margin={{ horizontal: "large" }}
        flex="grow"
      >
        <Heading level="3" size="medium" margin={{ vertical: "small" }}>
          About us:
        </Heading>
        <Box align="baseline" justify="start" direction="column" basis="xsmall">
          <Text weight="bold">Who are we?</Text>
          <Text weight="bold">Tips and tricks</Text>
          <Text weight="bold">Contact us</Text>
        </Box>
      </Box>
    </Nav>
  </Header>
);
export default FashionHeader;

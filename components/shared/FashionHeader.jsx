import { Box, Header, Heading, Nav, Text } from "grommet";

const FashionHeader = () => (
    <Header align="center" direction="row" flex={false} justify="start" gap="medium" background={{"color":"graph-1"}}>
      <Heading>
        Fashion hunters
  
      </Heading>
      <Nav align="center" direction="row">
        <Box align="baseline" justify="start" direction="column" margin={{"horizontal":"large"}} fill="horizontal">
          <Heading level="3" size="medium" margin={{"vertical":"small"}}>
            Women:
          </Heading>
          <Box align="baseline" justify="center" direction="column" basis="xsmall">
            <Text weight="bold">
              Clothing
            </Text>
            <Text weight="bold">
              Accessories
            </Text>
            <Text weight="bold">
              Shoes
            </Text>
            <Text weight="bold">
              Jewellery
            </Text>
          </Box>
        </Box>
        <Box align="baseline" justify="start" direction="column" margin={{"horizontal":"large"}} fill="horizontal">
          <Heading level="3" size="medium" margin={{"vertical":"small"}}>
            Men:
          </Heading>
          <Box align="baseline" justify="start" direction="column" basis="xsmall">
            <Text weight="bold">
              Clothing
            </Text>
            <Text weight="bold">
              Accessories
            </Text>
            <Text weight="bold">
              Shoes
            </Text>
          </Box>
        </Box>
        <Box align="baseline" justify="start" direction="column" margin={{"horizontal":"large"}} flex="grow">
          <Heading level="3" size="medium" margin={{"vertical":"small"}}>
            About us:
          </Heading>
          <Box align="baseline" justify="start" direction="column" basis="xsmall">
            <Text weight="bold">
              Who are we?
            </Text>
            <Text weight="bold">
              Tips and tricks
            </Text>
            <Text weight="bold">
              Contact us
            </Text>
          </Box>
        </Box>
      </Nav>
    </Header>
  );
  export default FashionHeader;
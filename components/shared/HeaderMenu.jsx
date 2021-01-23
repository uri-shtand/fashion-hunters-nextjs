import { Box, Heading, Text } from "grommet";

function HeaderMenu(props) {
    const headerText = props.headerText
  return (
    <Box
      align="baseline"
      justify="start"
      direction="column"
      margin={{ horizontal: "large" }}
      fill="horizontal"
    >
      <Heading level="3" size="medium" margin={{ vertical: "small" }} >
        {headerText}:
      </Heading>
      <Box align="baseline" justify="center" direction="column" basis="xsmall">
        <Text weight="bold">Clothing</Text>
        <Text weight="bold">Accessories</Text>
        <Text weight="bold">Shoes</Text>
        <Text weight="bold">Jewellery</Text>
      </Box>
    </Box>
  );
}

export default HeaderMenu;

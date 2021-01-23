import { Box, Card, CardBody, CardHeader, Heading, Markdown, Text } from "grommet";
import { Catalog } from "grommet-icons";

function StatementCard(props) {
  const headerText = props.headerText;
  return (
    <Card>
      <CardHeader
        align="center"
        direction="row"
        flex={false}
        justify="start"
        gap="medium"
        pad="small"
      >
        <Catalog size="large" />
        <Text size="large">{headerText}</Text>
      </CardHeader>
      <CardBody pad="small">
        <Markdown>
          We scan the content of eBay to find great fashion at an affordable
          price
        </Markdown>
      </CardBody>
    </Card>
  );
}

export default StatementCard;

import { Box, Card, CardBody, CardHeader, Grid, Image, Markdown, Text } from "grommet";
import { Catalog, CoatCheck, Language } from 'grommet-icons'
import StatementCard from "../shared/StatementCard";

const FashionStatement = () => (
  <Box align="center" justify="center" direction="row" margin={{"vertical":"medium"}} gap="medium" fill="horizontal">
    <StatementCard headerText="Hunting for hidden treasure"/>
    <Card>
      <CardHeader
        align="center"
        direction="row"
        flex={false}
        justify="start"
        gap="medium"
        pad="small"
      >
        <CoatCheck size="large" />
        <Text size="large">Unique brands</Text>
      </CardHeader>
      <CardBody pad="small">
        <Markdown>
          We find unique brands that you won't find anywhere else
        </Markdown>
      </CardBody>
    </Card>
    <Card>
      <CardHeader
        align="center"
        direction="row"
        flex={false}
        justify="start"
        gap="medium"
        pad="small"
      >
        <Language size="large" />
        <Text size="large">Ceremonial attire</Text>
      </CardHeader>
      <CardBody pad="small">
        <Markdown>Looking to wear something for that special event?</Markdown>
      </CardBody>
    </Card>
  </Box>
);
export default FashionStatement;

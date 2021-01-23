import React from 'react'
import { Grommet, Box, Main, Header, Heading, Nav, Text, Image, Card, CardHeader, CardBody, Markdown } from 'grommet'
import { Catalog, CoatCheck, Language } from 'grommet-icons'


const theme = {
  "name": "aruba",
  "rounding": 4,
  "spacing": 24,
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": "#ED6F00",
      "background": {
        "dark": "#111111",
        "light": "#FFFFFF"
      },
      "background-back": {
        "dark": "#111111",
        "light": "#EEEEEE"
      },
      "background-front": {
        "dark": "#222222",
        "light": "#FFFFFF"
      },
      "background-contrast": {
        "dark": "#FFFFFF11",
        "light": "#11111111"
      },
      "text": {
        "dark": "#EEEEEE",
        "light": "#333333"
      },
      "text-strong": {
        "dark": "#FFFFFF",
        "light": "#000000"
      },
      "text-weak": {
        "dark": "#CCCCCC",
        "light": "#444444"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#666666"
      },
      "border": {
        "dark": "#444444",
        "light": "#CCCCCC"
      },
      "control": {
        "light": "#ED6F00",
        "dark": "#EF8B27"
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#dd3000",
      "status-warning": "#f0c954",
      "status-ok": "#008375",
      "status-unknown": "#C3C5C8",
      "status-disabled": "#C3C5C8",
      "graph-0": "brand",
      "graph-1": "blue",
      "green": {
        "dark": "#d5d848",
        "light": "#d5d848"
      },
      "green!": "#d5d848",
      "blue": {
        "dark": "#9fd4c9",
        "light": "#004876"
      },
      "blue!": "#9fd4c9",
      "grey": {
        "dark": "#646569",
        "light": "#646569"
      },
      "grey!": "#646569",
      "graph-2": "green"
    },
    "font": {
      "family": "\"Open Sans\"",
      "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    }
  },
  "chart": {},
  "diagram": {
    "line": {}
  },
  "meter": {},
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  },
  "email": "eric.soderberg@hpe.com",
  "date": "2020-02-14T21:38:28.000Z"
}
export default () => {
    
  return (
    <Grommet full theme={theme}>
      <Box align="center" flex="grow" direction="column" background={{"color":"light-2"}}>
        <Main flex="grow" direction="column" background={{"dark":false}} align="center" pad={{"horizontal":"medium"}}>
          <Header align="center" direction="row" justify="start" background={{"color":"black"}} fill="horizontal">
            <Heading color="text-strong">
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
          <Box align="center" justify="center" pad="small" fill="horizontal" background={{"color":"black"}} margin={{"top":"xsmall"}}>
            <Image src="https://fashion-hunters-nextjs.vercel.app/pictures/banners/Unique_dresses.jpg" fit="contain" />
          </Box>
          <Box align="center" justify="center" direction="row" margin={{"vertical":"medium"}} gap="medium" fill="horizontal">
            <Card fill="horizontal">
              <CardHeader align="center" direction="row" flex={false} justify="start" gap="medium" pad="small">
                <Catalog size="large" />
                <Text size="large">
                  Hunting for hidden treasure
                </Text>
              </CardHeader>
              <CardBody pad="small">
                <Markdown>
                  We scan the content of eBay to   
find great fashion at an affordable price
                </Markdown>
              </CardBody>
            </Card>
            <Card fill="horizontal">
              <CardHeader align="center" direction="row" flex={false} justify="start" gap="medium" pad="small">
                <CoatCheck size="large" />
                <Text size="large">
                  Unique brands
                </Text>
              </CardHeader>
              <CardBody pad="small">
                <Markdown>
                  We find unique brands that  
you won't find anywhere else
                </Markdown>
              </CardBody>
            </Card>
            <Card fill="horizontal">
              <CardHeader align="center" direction="row" flex={false} justify="start" gap="medium" pad="small">
                <Language size="large" />
                <Text size="large">
                  Ceremonial attire
                </Text>
              </CardHeader>
              <CardBody pad="small">
                <Markdown>
                  Looking to wear something  
 for that special event? 
                </Markdown>
              </CardBody>
            </Card>
          </Box>
        </Main>
      </Box>
    </Grommet>
  )
}

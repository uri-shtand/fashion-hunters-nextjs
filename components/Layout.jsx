import { Box, Main } from 'grommet';
import FashionHeader from './shared/FashionHeader';
import FashionBanner from './mainpage/FashionBanner';
import FashionStatement from './mainpage/FahsionStatement';
const Layout = () => (
    <Box align="center" flex="grow" direction="column" background={{"color":"light-2"}}>
        <Main flex="grow" direction="column" background={{"dark":false}} align="center" pad={{"horizontal":"medium"}}>
            <FashionHeader />
            <FashionBanner />
            <FashionStatement />
        </Main>
    </Box>
  )

  export default Layout;
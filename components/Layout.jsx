import { Box } from 'grommet';
import FashionHeader from './shared/FashionHeader';
import FashionBanner from './shared/FashionBanner';
const Layout = () => (
    <Box  align="center" flex="grow">
        <FashionHeader />
        <FashionBanner />
    </Box>
  )

  export default Layout;
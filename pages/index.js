import Head from 'next/head'
import Layout from '../components/Layout';
import { Grommet } from 'grommet';
import { customTheme } from "./theme";

export default function Home() {
  return (
    <Grommet theme={customTheme}>
        <Head>
          <title>Fashion Hunters</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout/>
    </Grommet>
  )
}

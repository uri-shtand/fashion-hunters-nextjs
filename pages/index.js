import Head from 'next/head'
import Layout from '../components/Layout';
import {grommet,  Grommet } from 'grommet';

export default function Home() {
  return (
    <Grommet theme={grommet}>
        <Head>
          <title>Fashion Hunters</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
          <div className="container">
            Is this working?
          </div>
        </Layout>
    </Grommet>
  )
}

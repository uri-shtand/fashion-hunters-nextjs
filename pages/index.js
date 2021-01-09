import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import RollingBanner from '../components/RollingBanner';
import Demo from '../components/Demo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fashion Hunters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container">
          <RollingBanner/>
          <Demo/>
        </div>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

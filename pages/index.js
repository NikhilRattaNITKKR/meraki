import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meraki</title>
        <meta name="description" content="A Peer-2-Peer Money Lending Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1>Welcome to Meraki</h1>
    </div>
  )
}

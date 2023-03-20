import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Starter</title>
        <meta name="description" content="Choose your pokemon" />
      </Head>
    </div>
  )
}

export default Home

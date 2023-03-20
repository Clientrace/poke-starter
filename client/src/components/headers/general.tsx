
import Head from 'next/head'
import type { ReactElement } from 'react'

const GeneralHeaders = () : ReactElement => { 
  return (
    <Head>
      <title>Poke Starter</title>
      <meta name="description" content="Choose your pokemon" />
    </Head>
  )
}

export default GeneralHeaders


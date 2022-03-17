import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import RoundButton from '../components/UI/RoundButton'
import Header from '../components/Header'
import BigRoundBtn from '../components/BigRoundBtn'


// Because OpenSeadragon needs the Document, we have to import it dynamically
// and set ssr to false
const OpenSeaViewer = dynamic(() => import('../components/sections/OpenSeaViewer'), {ssr: false});

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Sonja Offen" content="Artist Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header>
          <RoundButton />
          <RoundButton />
        </Header>
        <BigRoundBtn right />
        <BigRoundBtn left /> 
      <OpenSeaViewer className={styles.openseadragon} />
      </main>

    </div>
  )
}

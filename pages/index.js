import Head from 'next/head'
import {useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import RoundButton from '../components/UI/RoundButton'
import Header from '../components/Header'
import BigRoundBtn from '../components/BigRoundBtn'
import ContactForm from '../components/ContactForm'
import ImageThumbnail from '../components/ImageThumbnail'


// Because OpenSeadragon needs the Document, we have to import it dynamically
// and set ssr to false
const OpenSeaViewer = dynamic(() => import('../components/sections/OpenSeaViewer'), {ssr: false});

export default function Home() {

  const [showContactForm, setShowContactForm] = useState(false);
  const [showImageThumbnail, setShowImageThumbail] = useState(false);

  const showContactFormHandler = () => {
    setShowContactForm(!showContactForm);
  }

  const showImageThumbnailHandler = () => {
    setShowImageThumbail(!showImageThumbnail);
  }

  return (
    <div className={styles.container}>
      <div id="backdrop-root" />
      <div id="modal-root"/>
      <div />

      <Head>
        <title>Create Next App</title>
        <meta name="Sonja Offen" content="Artist Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showContactForm && <ContactForm onClick={showContactFormHandler}/>} 
      {showImageThumbnail && <ImageThumbnail onClick={showImageThumbnailHandler} />}
      <main className={styles.main}>

        <Header>
          <RoundButton id="contact" onClick={showContactFormHandler}>i</RoundButton>
          <RoundButton onClick={showImageThumbnailHandler} />
        </Header>

        <BigRoundBtn right />
        <BigRoundBtn left /> 

        <OpenSeaViewer className={styles.openseadragon} />

      </main>

    </div>
  )
}

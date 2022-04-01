import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import RoundButton from "../components/UI/RoundButton";
import Header from "../components/Header";
import BigRoundBtn from "../components/BigRoundBtn";
import ContactForm from "../components/ContactForm";
import ImageThumbnail from "../components/ImageThumbnail";
import Title from '../components/Title';

// Because OpenSeadragon needs the Document, we have to import it dynamically
// and set ssr to false
const OpenSeaViewer = dynamic(
  () => import("../components/sections/OpenSeaViewer"),
  { ssr: false }
);

export default function Home() {

  const [showContactForm, setShowContactForm] = useState(false);
  const [showImageThumbnail, setShowImageThumbail] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const showContactFormHandler = () => {
    setShowContactForm(!showContactForm);
  };

  const showImageThumbnailHandler = () => {
    setShowImageThumbail(!showImageThumbnail);
  };

  useEffect(() => {
    setTimeout( () => setShowTitle(false), 6000 )
  }, [])


  return (
    <div >

      <Head>
        <title>Create Next App</title>
        <meta name="Sonja Offen" content="Artist Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showContactForm && <ContactForm onClick={showContactFormHandler} />}
      {showTitle && <Title />}
      {/* the navigator/image thumbnail is wrapped in this div so that the div itself is conditionally set to disply:none. This is so that the navigator element is always rendered, allowing open seadragon to access it*/} 
      <div className={showImageThumbnail ? styles.showNav : styles.hideNav}>
        <ImageThumbnail hide={showImageThumbnailHandler} />
      </div>

      <main id="main" className={styles.main}>

        <Header>
          <RoundButton id="contact" onClick={showContactFormHandler}>
            i
          </RoundButton>
          <RoundButton onClick={showImageThumbnailHandler} />
        </Header>

        <BigRoundBtn btnId="nextBtn" right />
        <BigRoundBtn btnId="prevBtn" left />

        <OpenSeaViewer
          className={styles.openseadragon}
        />

        <div className={styles.footer}>
          <h1>Sonja Offen</h1>
        </div>
      </main>
    </div>
  );
}

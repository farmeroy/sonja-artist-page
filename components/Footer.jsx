import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>IMPRINT</h1>
      <div>
        <p>Sonja Ofen,</p>
        <p>Stockholmer Strasse 4,</p>
        <p>13359</p>
        <p>studio@sonjaofen.com</p>
      </div>
      <br />
      <h2>Copyright</h2>
      <p>
        The content and works published on this website are governed by the
        copyright laws of Germany. Any duplication, processing, distribution, or
        any form of utilisation beyond the scope of copyright law shall require
        the prior written consent of the author or authors in question.
      </p>
      <p> © all images: Sonja Ofen</p>
      <br />
      <p>Website built by Raffaele Cataldo</p>
    </div>
  );
};

export default Footer;

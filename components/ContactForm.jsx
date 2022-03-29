import ModalElement from "./UI/ModalElement";
import styles from './ContactForm.module.css'

const ContactFom = (props) => {
  return (
    <ModalElement hide={props.onClick}>
      <form className={styles.form}>
        <label htmlFor="message">Message Me!</label>
        <textarea
          className={styles.textarea}
          name="message"
          id="message"
          required
        ></textarea>
        <button className={styles.btn} type="submit">Send</button>
      </form>
    </ModalElement>
  );
};

export default ContactFom;

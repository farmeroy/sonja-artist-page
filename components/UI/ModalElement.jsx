import styles from "./ModalElement.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

const Modal = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const ModalElement = (props) => {
  return (
    <>
      <Backdrop onClick={props.hide}></Backdrop>
      <Modal onClick={props.hide}>{props.children}</Modal>
    </>
  );
};

export default ModalElement;

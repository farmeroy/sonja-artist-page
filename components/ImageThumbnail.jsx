import ModalElement from "./UI/ModalElement"
import styles from './ImageThumbnail.module.css'

const ImageThumbnail = (props) => {
  return (
    <ModalElement hide={props.hide}>
      <div className={styles.container}>
        <div id='navigator' ></div>
        </div>
    </ModalElement>
  )
}

export default ImageThumbnail;

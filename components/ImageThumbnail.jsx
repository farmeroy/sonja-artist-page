import ModalElement from "./UI/ModalElement"
import styles from './ImageThumbnail.module.css'
import Image from 'next/image'
import { useState } from 'react'

// const ImageThumbnail = (props) => {
//   return (
//     <ModalElement onClick={props.onClick}>
//       <div className={styles.container}>
//         <div className={styles.spacer}></div>
//         <div id='navigator' ></div>
//         {/* <Image className={styles.image}  src="/thumbnails/blue3complete@0,1x.jpg" alt="full image" width='1488' height="324"/> */}
//         <div  className={styles.spacer}/>
//         </div>
//     </ModalElement>
//   )
// }

const ImageThumbnail = (props) => {
  

  return (
    <>
    <div className={styles.backdrop} />
    <div className={styles.modal}>
    <div className={styles.container}>
      <div id='navigator'></div>
    </div>
    </div>
    </>
  )
}

export default ImageThumbnail;

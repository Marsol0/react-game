import React from 'react'
import styles from "./styles.module.css"
export default function Avatar({imgUrl}) {
  return (
    <div className={styles.main}>
         <img src={imgUrl} alt="wukong" />
        
    </div>
   
  )
}

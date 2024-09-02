import React from 'react';
import styles from "./style.module.css";

export default function Quests({ quest, reward, questIsDone }) {
  return (
    <div className={styles.main} onClick={questIsDone}>
      {quest} - {reward} coins
    </div>
  );
}

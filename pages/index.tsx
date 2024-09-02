import styles from "@/styles/Home.module.css";
import Avatar from "../components/Avatar/Avatar";
import Quests from "../components/Quests/Quests";
import { quests as qlist } from "../data/quests";
import { useState, useEffect } from "react";

export default function Home() {
  const [quests, setQuests] = useState([]);
  const [availableQuests, setAvailableQuests] = useState(qlist.slice()); // Copy of all quests
  const [token, setToken] = useState(0);

  useEffect(() => {
    // Initialize with the first 5 quests
    setQuests(availableQuests.slice(0, 5));
    setAvailableQuests(availableQuests.slice(5)); // Remaining quests
  }, []);

  const handleQuestCompletion = (id, reward) => {
    // Update token count
    setToken((prevToken) => prevToken + reward);

    // Remove completed quest from displayed quests
    setQuests((prevQuests) => prevQuests.filter((quest) => quest.id !== id));

    // Add a new quest from the available pool if there are any left
    if (availableQuests.length > 0) {
      setQuests((prevQuests) => [
        ...prevQuests,
        availableQuests[0], // Add the next available quest
      ]);
      setAvailableQuests((prevAvailable) => prevAvailable.slice(1)); // Remove the added quest from the available pool
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        {/* Header with Avatar and Token Display */}
        <div className={styles.header}>
          <Avatar imgUrl="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/05-characters/elden-ring-character-samourai-full.png?twic=v1/resize=370/step=10/quality=80" />
          <div className={styles.tokenDisplay}>Coins: {token}</div>
        </div>

        {/* Quests List */}
        <div className={styles.questsList}>
          {quests.map((quest) => (
            <Quests 
              key={quest.id}
              quest={quest.quest}
              reward={quest.reward}
              questIsDone={() => handleQuestCompletion(quest.id, quest.reward)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

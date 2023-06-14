import styles from "./ChatMessages.module.css";

export default function ChatMessages({ messages }) {
  return (
    <div className={styles.root}>
      {messages.map(({ id, text }) => {
        return (
          <div key={id} className={styles.message}>
            {text}
          </div>
        );
      })}
    </div>
  );
}
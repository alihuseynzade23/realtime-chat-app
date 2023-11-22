import styles from './chat.module.css';

export default function ChatInput () {
    return (
        <div className={styles.inputWrapper}>
            <input type="text" />
            <button>SEND</button>
        </div>
    );
}
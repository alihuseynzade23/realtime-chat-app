import styles from './chat.module.css';
import ChatBox from './chatBox';
import ChatInput from './chatInput';

export default function Chat () {
    return (
        <div className={styles.chat}>
            <h1>Chat App</h1>
            <ChatBox />
            <ChatInput />
        </div>
    );
}
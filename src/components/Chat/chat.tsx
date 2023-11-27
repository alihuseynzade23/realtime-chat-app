import ChatBox from '../ChatBox/chatBox';
import ChatInput from '../ChatInput/chatInput';
import Title from '../Title/title';
import styles from '../ChatBox/chatbox.module.css'

export default function Chat () {
    return (
        <div className={styles.chat}>
            <Title className='title' />
            <ChatBox />
            <ChatInput />
        </div>
    );
}
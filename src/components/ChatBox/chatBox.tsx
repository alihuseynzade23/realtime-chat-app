import { useEffect, useState } from "react";
import {ref, onValue, push} from 'firebase/database'
import db from "../Firebase/firebase";
import styles from './chatbox.module.css'

interface ChatItem {
    key: string;
    message: string;
}
export default function ChatBox () {
    const [userKey, setUserKey] = useState<string>('')
    const [chat, setChat] = useState<ChatItem[]>([])
    

    useEffect(() => {
        onValue(ref(db, `/chat`), snapshot => {
          const data = snapshot.val();
          setChat(data ? Object.values(data) : []);
        });
      }, []);

    useEffect(() => {
        const x = window.localStorage.getItem('userKey')
        if(x) {
            setUserKey(x)
        } else {
            const snapshot: any = push(ref(db, `/chat`));
            window.localStorage.setItem('userKey', snapshot.key);
            setUserKey(snapshot.key);
        }
    }, [])

    return(
            <div className={styles.chatBox}>            
                {chat.map((item, index) => (
            <p key={index} className={item.key === userKey ? styles.msgFromMe : styles.msgFromUser}>{item.message}</p>

        ))}
            </div>

    )

}
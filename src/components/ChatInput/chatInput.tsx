import db from "../Firebase/firebase"
import {onValue, ref, set} from 'firebase/database'
import { useState, useEffect, useRef } from "react"
import Button from "../Button/button"
import styles from '../ChatBox/chatbox.module.css'

interface Message {
    key: string;
    message: string;
}
export default function ChatInput () {
    const inputRef = useRef<HTMLInputElement | null>(null); 
    const [userKey, setUserKey] = useState('')
    const [chat, setChat] = useState<Message[]>([])


    useEffect(() => {
        const userKey = window.localStorage.getItem('userKey')
        setUserKey(userKey || '')
    }, [])

    useEffect(() => {
        onValue(ref(db, `/chat`), snapshot => {
            setChat(snapshot.val() || [])
        })
    }, [])

    const sendData = () => {
        const msgItem:Message = {
            key: userKey,
            message: inputRef.current!.value
        }

        chat.push(msgItem);

        set(ref(db, '/chat'), chat).then(() => {
            inputRef.current!.value = ''
        })
    }
    return (
    <div>
        <input ref={inputRef} className='input' type="text" />   
        <Button className={styles.button} onClick={sendData} />
    </div>  
    ) 
}


import { useState } from 'react';
import classes from './Chat.module.css'
import MessageCard from './MessageCard';
function Chat() {
    const [messagelist, setMessageList] = useState([]);
    const [CurentMessage, setCurentMessage] = useState("");
    function Message() {
        setMessageList((list) => [...list, CurentMessage])
        setCurentMessage("")
    }
    return <div className={classes.chatCard}>
        <div className={classes.chatHeader} ></div>
        <div className={classes.chatContent} >
            <div className={classes.chatMessages}>
                {messagelist.map((message) => (
                    <MessageCard message={message} />
                ))}
            </div>
            <div className={classes.chatFooter}>
                <input value={CurentMessage} placeholder="  Hey..." type="text" onChange={(event) => {
                    setCurentMessage(event.target.value);
                }} onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        Message();
                    };
                }} />
                <button onClick={Message}>&#9658;</button></div>
        </div>
    </div>
}
export default Chat;
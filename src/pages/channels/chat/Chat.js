

import { useState } from 'react';
import classes from './Chat.module.css'
import ChatHeader from './ChatHeader';
import MessageCard from './MessageCard';
function Chat(props) {
    const [messagelist, setMessageList] = useState([]);
    const [CurentMessage, setCurentMessage] = useState("");
    function Message() {
        if(CurentMessage !== "")
        {
            setMessageList((list) => [...list, CurentMessage])
            setCurentMessage("")
        }
    }
    
    return <div className={classes.chatCard}>
        <ChatHeader toggle={props.toggle} channel={props.channel}/>
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
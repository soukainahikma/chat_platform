import { useState } from 'react';
import classes from './ChatHeader.module.css'



function GameInvitation(props) {
    return <div>
        <div className={classes.backdrop}></div>
        <div className={classes.card}>
            <div className={classes.cardContent}>
                <h1>GAME INVITATION</h1>
                <div className={classes.choices}>
                    <button id={classes.check} className={classes.buttons} onClick={props.OpenClose}><i class="fa-solid fa-check"></i></button>
                    <button id={classes.cross} className={classes.buttons} onClick={props.OpenClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>
        </div>
    </div>
}
function ChatHeader(props) {
    const [backdrop, setBackdrop] = useState(false);
    function OpenCloseModal() {
        if (backdrop === false)
            setBackdrop(true);
        else
            setBackdrop(false);
    }
    return (<div className={classes.chatWrapper}>
        <button className={classes.chatHeader} onClick={props.toggle} >
            <img src="https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"></img>
            <div className={classes.info}>
                <div>{props.user.name}</div>
                <div>Online </div>
            </div>
        </button>
        <button onClick={OpenCloseModal} className={classes.buttonInvitation}>Game Invitation</button>
        {backdrop ? <GameInvitation OpenClose={OpenCloseModal} /> : null}
    </div>)
}
export default ChatHeader
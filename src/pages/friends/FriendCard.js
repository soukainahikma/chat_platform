import { useContext } from 'react';
import { DataContexProvider } from './data_context/data-context';
import classes from './FriendCard.module.css'
function FriendCard(props) {
    const dataContextVar = useContext(DataContexProvider);
    function setConversation(){
        dataContextVar.setConversationId(props.key);
    }
    return (
        <button className={classes.friendButton} onClick={setConversation}>
            <img className={classes.profileImg} src="https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"></img>
            <div className={classes.profileInfo}>
                <div>{props.user.name}</div>
                <div>online</div>
            </div>
        </button>
    )
}

export default FriendCard;
import Chat from './chat/Chat';
import FriendCard from './FriendCard';
import classes from './Friends.module.css'
function Friends( props) {
    return <div className={classes.mainCard}>
        <div className={classes.friendList}>
            <input type="text" /* value="" */ placeholder="  Search..."/>
           <FriendCard/>
        </div>
        <Chat toggle={props.toggle}/>
    </div>
}

export default Friends;
import Chat from './chat/Chat';
import FriendCard from './FriendCard';
import classes from './Friends.module.css'
function Friends() {
    return <div className={classes.mainCard}>
        <div className={classes.friendList}>
            <input type="text" /* value="" */ placeholder="  Search..."/>
           <FriendCard/>
           <FriendCard/>
           <FriendCard/>
           <FriendCard/>
           <FriendCard/>
           <FriendCard/>
        </div>
        <Chat/>
    </div>
}

export default Friends;
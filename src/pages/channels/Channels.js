import Chat from './chat/Chat';
import ChannelCard from './ChannelCard';
import classes from './Channels.module.css'
function Channels( props) {
    return <div className={classes.mainCard}>
        <div className={classes.channelList}>
            <input type="text" /* value="" */ placeholder="  Search..."/>
            <ChannelCard/>
        </div>
        <Chat toggle={props.toggle}/>
    </div>
}

export default Channels;
import Chat from './chat/Chat';
import ChannelCard from './ChannelCard';
import classes from './Channels.module.css'
import { useContext } from 'react';
import DataChannel from './data_context/data-context';
function Channels( props) {
    const dataChannelVar = useContext(DataChannel);
    return <div className={classes.mainCard}>
        <div className={classes.channelList}>
            <input type="text" /* value="" */ placeholder="  Search..."/>
            {dataChannelVar.data.map((channel)=><ChannelCard key={channel.channelId} channel={channel}/>) }
        </div>
        <Chat toggle={props.toggle} channel={dataChannelVar.selectedConversation}/>
    </div>
}

export default Channels;
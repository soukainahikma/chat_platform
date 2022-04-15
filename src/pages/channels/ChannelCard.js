import classes from './ChannelCard.module.css'
function ChannelCard() {
    return (
        <button className={classes.channelButton}>
            <img className={classes.channelImg} src="https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"></img>
            <div className={classes.channelInfo}>
                <div>annoucement</div>
                <div>online</div>
            </div>
        </button>
    )
}

export default ChannelCard;
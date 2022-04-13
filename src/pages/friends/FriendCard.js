import classes from './FriendCard.module.css'
function FriendCard() {
    return (
        <button className={classes.friendButton}>
            <img className={classes.profileImg} src="https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"></img>
            <div className={classes.profileInfo}>
                <div>shikma</div>
                <div>online</div>
            </div>
        </button>
    )
}

export default FriendCard;
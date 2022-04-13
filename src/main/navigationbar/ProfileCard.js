
import classes from './ProfileCard.module.css'
function ProfileCard(){
    return(<div className={classes.setCard}>
        <img src="https://i.pinimg.com/474x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"></img>
            <div className={classes.card}>
            <div className={classes.innerHtml}>shikma</div>
            <div className={classes.innerHtml}>Score: 46</div>
            </div>
    </div>);
}
export default ProfileCard;
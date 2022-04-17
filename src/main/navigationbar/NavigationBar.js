
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css'
import ProfileCard from './ProfileCard';
function NavigationBar() {
    return <nav className={classes.nav}>
        <div>
            <ProfileCard/>
            <div className={classes.barContent}>
                <Link className={classes.link} to="/"><button><i class="fa-solid fa-house"></i>Home</button></Link>
                <Link className={classes.link} to="/chat"><button><i class="fa-brands fa-rocketchat"></i>Chat </button></Link>
                <Link className={classes.link} to="/channels"><button><i class="fa-solid fa-users-line"></i>Channels</button></Link>
                <Link className={classes.link} to="/game"><button><i class="fa-solid fa-gamepad"></i> Game</button></Link>
                <Link className={classes.link} to="/new_channel"><button><i class="fa-solid fa-circle-plus"></i>Create Channel</button></Link>
                <Link className={classes.link} to="/settings"><button><i class="fa-solid fa-gear"></i>Settings</button></Link>
            </div>
        </div>
    </nav>
}
export default NavigationBar;
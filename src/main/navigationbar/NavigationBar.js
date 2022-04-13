
import { Link } from 'react-router-dom';
import classes from './NavigationBar.module.css'
import ProfileCard from './ProfileCard';
function NavigationBar() {
    return <nav className={classes.nav}>
        <div>
            <ProfileCard/>
            <div className={classes.barContent}>
                <Link className={classes.link} to="/"><button>Home</button></Link>
                <Link className={classes.link} to="/friends"><button>Friends </button></Link>
                <Link className={classes.link} to="/channels"><button>Channels</button></Link>
                <Link className={classes.link} to="/Game"><button>Game</button></Link>
            </div>
        </div>
    </nav>
}
export default NavigationBar;
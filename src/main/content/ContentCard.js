import { Route, Switch } from 'react-router';
import Channels from '../../pages/channels/Channels';
import Friends from '../../pages/friends/Friends';
import Home from '../../pages/home/Home';
import classes from './ContentCard.module.css'

function ContentCard(props) {
    return (<div className={classes.content} >
        <div className={classes.card}>
            <Switch>
                <Route path='/'exact >
                    <Home />
                </Route>
                <Route path='/chat'>
                    <Friends toggle={props.toggle}/>
                </Route>
                <Route path='/channels'>
                    <Channels />
                </Route>
            </Switch>
        </div>
    </div>)

}
export default ContentCard;
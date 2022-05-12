import { Route, Switch } from 'react-router';
import Channels from '../../pages/channels/Channels';
import Friends from '../../pages/friends/Friends';
import Home from '../../pages/home/Home';
import NewChannel from '../../pages/newChannel/NewChannel';
import classes from './ContentCard.module.css'

function ContentCard() {
    return (<div className={classes.content} >
        <div className={classes.card}>
            <Switch>
                <Route path='/'exact >
                    <Home />
                </Route>
                <Route path='/chat'>
                    <Friends/>
                </Route>
                <Route path='/channels'>
                    <Channels />
                </Route>
                <Route path='/new_channel'>
                    <NewChannel />
                </Route>
            </Switch>
        </div>
    </div>)

}
export default ContentCard;
import { Route, Switch } from 'react-router';
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
            </Switch>
        </div>
    </div>)

}
export default ContentCard;
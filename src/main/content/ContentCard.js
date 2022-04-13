import { Route, Switch } from 'react-router';
import Friends from '../../pages/friends/Friends';
import classes from './ContentCard.module.css'

function ContentCard() {
    return (<div className={classes.content} >
        <div className={classes.card}>
            <Switch>
                <Route path='/friends' exact>
                    <Friends />
                </Route>
            </Switch>
        </div>
    </div>)

}
export default ContentCard;
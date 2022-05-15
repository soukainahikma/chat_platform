import './Auth.css';
import Login from './Containers/Login';
import {Switch, Route, Redirect} from 'react-router-dom';
import Register from './Containers/Register';

const Auth = () => {
  return (
    <div className="Auth">
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Redirect from='/' to='/register' />
    </div>
    
  );
}

export default Auth;

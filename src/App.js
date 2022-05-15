import classes from './App.module.css'
import MainApp from './main/MainApp';
import Auth from './Auth'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      {/* <MainApp /> */}
      {/* <Auth /> */}
      <Switch>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/app">
          <MainApp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

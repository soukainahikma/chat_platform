import classes from './App.module.css'
import MainApp from './main/MainApp';
import Auth from './Auth'
import { Switch } from 'react-router-dom';
function App() {
  return (
    <div className={classes.App}>
      <MainApp />
      {/* <Auth /> */}
    </div>
  );
}

export default App;


import { useState } from 'react';
import classes from './App.module.css'
import MainApp from './main/MainApp';
import ProfileModal from './profileModal/ProfileModal';
function App() {
  const [backdrop,setBackdrop] = useState(false);
  function OpenCloseModal() {
    if (backdrop == false)
        setBackdrop(true);
    else
        setBackdrop(false);
}
 
  return (
    <div  className={classes.App}>
      <MainApp OpenClose={OpenCloseModal}/>
      {backdrop? <ProfileModal/>: null}
    </div>
  );
}

export default App;

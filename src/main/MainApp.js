import ContentCard from "./content/ContentCard";
import classes from "./MainApp.module.css"
import NavigationBar from "./navigationbar/NavigationBar";
function MainApp(props){
    return<div className={classes.mainCard}>
        <NavigationBar/>
        <ContentCard  toggle={props.OpenClose}/>
        
    </div>
}

export default MainApp;
import PeopleCard from './PeopleCard'
import classes from './PeopleList.module.css'
function PeopleList() {
    return (<div className={classes.list}>
        <PeopleCard/>
        <PeopleCard/>
        <PeopleCard/>
    </div>)
}
export default PeopleList
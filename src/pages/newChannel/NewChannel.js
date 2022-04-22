import classes from './NewChannel.module.css'


function NewChannel() {
    function SelectOption(event) {
        if (event.target.value === 'protected')
            document.getElementById(classes.password).style.display = "flex";
        else
            document.getElementById(classes.password).style.display = "none";
    }
    return (<div className={classes.card}>
        <form className={classes.createForm}>
            <div className={classes.text}>Create new channel</div>
            <div className={classes.info}>
                <label> Name: </label>
                <input type="text" name="name" required />
            </div>
            <div className={classes.info}>
                <label> Avatar: </label>
                <input type="text" name="name" required />
            </div>
            <div className={classes.info}>
                <label> Status: </label>
                <select name="status" onChange={SelectOption}>
                    <option value="public">public</option>
                    <option value="private">private</option>
                    <option value="protected">protected</option>
                </select>
            </div>
            <div className={classes.info} id={classes.password}>
                <label> Password: </label>
                <input type="text" name="name" required />
            </div>
            <button>Create</button>
        </form>
    </div>)
}
export default NewChannel;
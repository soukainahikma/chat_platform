import classes from './NewChannel.module.css'
import Password from './Password';
import {useState} from "react"

function NewChannel() {
    const [choice, setChoice] = useState(false)
    return (<div className={classes.card}>
        <form className={classes.createForm}>
            <div className={classes.text}>Create new channel</div>
            <h5>Channels are where your team communicate, They're best when to organized around topic </h5>
            <div className={classes.info}>
                <label> Channel name </label>
                <input type="text" name="name" className={classes.inputs} required />
            </div>
            <div className={classes.info}>
                <label> Description <span>(optional)</span> </label>
                <textarea type="text" name="description" required />
            </div>
            <div className={classes.info}>
                <label > Status </label>
                <div className={classes.status}><input type="radio" name="status" onChange={()=>setChoice(false)}  /><label>public</label></div>
                <div className={classes.status}><input type="radio" name="status"  onChange={()=>setChoice(false)}/><label>private</label></div>
                <div className={classes.status}><input type="radio" name="status"  onChange={()=>setChoice(true)}/><label>protected</label></div>
            </div>
            {choice ?<Password />: null}
            <div className={classes.info}>
                <label> Add people <span>(You can skip this step for now) </span></label>
                <input type="text" name="name" className={classes.inputs} required />

            </div>
            <div className={classes.buttons}>
                <button id={classes.cancel}>Cancel</button>
                <button id={classes.create}>Create</button>
            </div>
        </form>
    </div>)
}
export default NewChannel;
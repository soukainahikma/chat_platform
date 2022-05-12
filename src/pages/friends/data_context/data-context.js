import { createContext, useState } from "react";

const DataContex = createContext({
    data:[],
    addUser:(user)=>{}
});

export function DataContexProvider(props){
    const [userData, SetUserData] = useState([]);
    function addUserHandler(userData)
    {
        SetUserData((previousData)=>{
            return(previousData.concat(userData));
        })
    }
    const context = {
        data: userData,
        addUser: addUserHandler
    }
    return(
        <DataContex.Provider value={context}>
            {props.children}
        </DataContex.Provider>
    )
}
export default DataContex;
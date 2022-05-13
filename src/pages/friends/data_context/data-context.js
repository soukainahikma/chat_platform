import { createContext, useState } from "react";

const DataContex = createContext({
    data: [],
    selectedConversationId: 0,
    addUser: (user) => { },
    setConversationId: (val) => { }
});

export function DataContexProvider(props) {
    const [userData, SetUserData] = useState([{ conversationId: 0, userId: 1, name: "aboulbaz" },
    { conversationId: 1, userId: 5, name: "soukaina" },
    { conversationId: 2, userId: 9, name: "salma" }
    ]);
    const [convId,setConvId] = useState(0)
    function addUserHandler(userData) {
        SetUserData((previousData) => {
            return (previousData.concat(userData));
        })
    }
    function setConversationId(convId) {
        setConvId(convId);
    }
    const context = {
        data: userData,
        addUser: addUserHandler,
        selectedConversationId: convId,
        setConversationId: setConversationId
    }
    return (
        <DataContex.Provider value={context}>
            {props.children}
        </DataContex.Provider>
    )
}
export default DataContex;
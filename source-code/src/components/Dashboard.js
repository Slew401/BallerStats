import React, { useState } from 'react'
import { Tabs, Tab } from "react-bootstrap"
import { app, auth } from "../firebase";
import { ref, uploadString, getStorage, listAll} from "firebase/storage";

function Dashboard() {
    const [uid, setUid] = useState(auth?.currentUser?.uid)
    
    const storage = getStorage(app)
    const storageRef = ref(storage, `${uid}/`)
    listAll(storageRef).then((res) => {
        res.items.forEach((item) => {
            console.log(item)
        })
    })
    return (
        <div className="main">
            <Tabs defaultActiveKey="home" id="Account Settings" className="mb-3">
                <Tab eventKey="home" title="Graph Gallery">
                
                </Tab>
                <Tab eventKey="profile" title="Account Settings">
                
                </Tab>
            </Tabs>
        </div>
    )
}

export default Dashboard


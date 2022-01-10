import React, { useState, useEffect } from 'react'
import { app, auth } from "../firebase";
import { ref, uploadString, getStorage, getDownloadURL} from "firebase/storage";
import { Button } from "react-bootstrap"

function SaveGraph({ canvas }) {
    const [uid, setUid] = useState(auth?.currentUser?.uid)
    const [title, setTitle] = useState()    
    const userPath = `${uid}/${title}`
    const storage = getStorage(app)
    const storageRef = ref(storage, userPath)
    const metadata = {
        contentType: 'image/jpeg',
    }
    
    function imgSave(){
        uploadString(storageRef, canvas, 'data_url', metadata).then((snapshot) => {
            console.log('Uploaded a data_url string!');
        });
        
    }
    useEffect(() =>{
        setUid(auth?.currentUser?.uid)
    },[])

    return (
        <div>
            <input placeholder="Enter Graph Title"  id ="input" onChange={(e) => {setTitle(e.target.value)}} style = {{marginRight:"30px"}}></input>
            <Button onClick={imgSave} style={{
                backgroundColor:"rgb(250, 131, 32)", borderColor:"rgb(250, 131, 32)", color:"black", marginRight:"20"}}>Save Graph</Button>
        </div>
    )
}

export default SaveGraph

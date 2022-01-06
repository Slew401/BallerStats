import React, { useState } from 'react'
import { app, auth } from "../firebase";
import { ref, uploadString, getStorage} from "firebase/storage";
import { Button } from "react-bootstrap"
import { saveAs } from "file-saver"

function SaveGraph({ canvas }) {
    const [uid, setUid] = useState(auth?.currentUser?.uid)
    const [title, setTitle] = useState()    
    console.log(canvas)
    const storage = getStorage(app)
    const storageRef = ref(storage, `${uid}/${title}`)
    const metadata = {
        contentType: 'image/jpeg',
    }
    
    function imgSave(){
        console.log(canvas)
        uploadString(storageRef, canvas, 'data_url', metadata).then((snapshot) => {
            console.log('Uploaded a data_url string!');
          });
        
    }
    const downloadGraph = () => {
        
    }
    return (
        <div>
            <input placeholder="Enter Graph Title"  id ="input" onChange={(e) => {setTitle(e.target.value)}}></input>
            <Button onClick={imgSave}>Save Graph</Button>
            <Button onClick={downloadGraph}>Download Graph</Button>
        </div>
    )
}

export default SaveGraph

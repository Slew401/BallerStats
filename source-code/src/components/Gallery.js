import React, { useState, useEffect } from 'react'
import { ref, uploadString, getStorage, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { app, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { Card, Row, Col, Input } from 'antd'

function Gallery() {
    const [click, setClick] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const [uid,setUid] = useState(auth?.currentUser?.uid)
    const [imagesURL, setImagesURL] = useState([])
    const [imageObject, setImageObject] = useState([])
    const [outgoing, setOutgoing] = useState()
    const storage = getStorage(app)
    const listRef = ref(storage, `${uid}/`)
    
    useEffect(() =>{
        setUid(auth?.currentUser?.uid)
    },[])
// webUrl:getDownloadURL(item).then(webURL => {
                    //     this.address = Promise.all(webURL)
                    // })
    useEffect(() =>{
        const images = []
        listAll(listRef).then((res) => {
            const urls = []
            const images = []
            res.items.forEach((item) => {
                urls.push(getDownloadURL(item))

            })
            Promise.all(urls).then((res) => {
                setImagesURL(...imagesURL, res)
                images.push(res)
            })
        })
        setImagesURL(images);
    },[])
    /**/
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }

      const controlFlow = (address) => {
          setClick(true)
          setOutgoing(address)
      }

      const deleteImage = (ref) => {
        deleteObject(ref).then(()=> {
            alert('This Chart has been deleted')
        })
    }
    
      useEffect(() => {
        if(click){
            window.open(outgoing);
        }
    })
        const objects = []
        imagesURL?.forEach((url) => {
            objects.push({
                address:url,
                urlRef: ref(storage, url),
            })
        })
        console.log(objects[0]?.urlRef?.name)
        // useEffect(() => {
        //     imagesURL?.forEach((url) => {
        //         console.log(url)
        //         const urlref = ref(storage, url)
        //         objects.push({
        //             address: url,
        //             ref: urlref,
        //             name: urlref.name
        //         })
        //     })
        // },[])
        
        console.log()
        
        return (
        <Row gutter = {[32,32]} className = "team-card-container">
            {objects?.map((imageObject) => (
                <Col xs = {24} sm = {12} lg = {6}> 
                    <div>
                        <Card extra={<img style={{width:"250px", height:"100px"}} src = {imageObject.address} alt="alt"/>}
                        hoverable
                        >            
                        <p>{imageObject.urlRef?.name}</p>           
                        </Card>
                        <button onClick={() => controlFlow(imageObject.address)}>Enlarge Picture</button>
                        <button onClick = {() => deleteImage(imageObject.urlRef)}> Delete ✕ </button>
                    </div>
                </Col>
        
            ))}
        </Row>
    )
}

export default Gallery

// useEffect(() =>{
//     const images = []
//     listAll(listRef).then((res) => {
//         const urls = []
//         const images = []
//         console.log(res)
//         res.items.forEach((item) => {
//             urls.push(getDownloadURL(item))
//         })
//         Promise.all(urls).then((res) => {
//             setImagesURL(...imagesURL, res)
//             images.push(res)
//         })
//     })
//     setImagesURL(images);
// },[])
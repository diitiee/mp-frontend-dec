
import  Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import  Card from 'react-bootstrap/Card';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../Services/allAPI';


export default function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
   const{caption,link}=video

   let today=new Date()
   let timeStamp= new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format (today)
console.log(timeStamp);

let videoHistory={caption,link,timeStamp}

// make api call

await addVideoHistoryAPI(videoHistory)
}

const removeVideo = async (id)=>{
  await deleteVideoAPI(id)
  setDeleteVideoResponse(true)
}
 const dragStarted =(e,id)=>{
console.log("Drag started...Video Id:"+id);
e.dataTransfer.setData("VideoId",id)
 }
  return (
    <>
     <Card  draggable onDragStart={e=>dragStarted(e,video?.id)} style={{ width: '16rem' }}>
      <Card.Img variant="top" height={'200px'} onClick={handleShow } src= {video?.url}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video?.caption}</h5>
         {insideCategory?null: <button onClick={()=>removeVideo(video?.id)} className='bt'><i class="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="418" src={`${video.link}?autoplay=1`} title="Aadujeevitham |The Goat Life Official Trailer | A R Rahman| Prithviraj Sukumaran| Amala Paul| Blessy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

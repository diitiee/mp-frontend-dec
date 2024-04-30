import React from 'react'
import {Col,Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl =  useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'> Media Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur tempore mollitia quisquam! Reprehenderit quidem distinctio sed dolore voluptate omnis voluptas quo neque, consequuntur esse aliquid, ratione eius magna Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, blanditiis eos placeat nulla sunt iure animi suscipit quo nostrum magnam modi fugiat temporibus exercitationem. Tempora consectetur voluptatem excepturi eligendi nisi!</p>
        <button className='btn btn-info mt-4' onClick={()=>navigateByUrl('./home')}>Get Started</button>
      </Col>
      <Col><img src="https://media.tenor.com/gr9yg6f1rOwAAAAi/clavee-clavee-official.gif" height={'350px'} width={'350px'} alt=""  /></Col>
      <Col></Col>
    </Row>

    <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
     <h3>Features</h3>
     <div className='mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
     <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'270px'} width={'250px'} src="https://media.tenor.com/eMrZP9HBkqEAAAAj/frkst-records.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
     <Card style={{ width: '22rem' } } className='p-4 bg-info' >
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://media.tenor.com/ehqOVmoCtt8AAAAj/radio-music.gif " />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
     <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'}  src="https://media.tenor.com/TsmIbA31bUMAAAAi/music-sounds.gif " />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

     </div>
    </div>
  
   <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w=100">
   <div className='col-lg-5'>
    <h4 className='text-warning'> Simple,Powerful & fast</h4>
    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>play Everything</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quisquam modi, possimus atque doloribus dolorum inventore obcaecati suscipit ex sint excepturi, itaque qui adipisci minus officiis nobis? Neque, expedita possimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum vel inventore adipisci, </h6>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>play Everything</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quisquam modi, possimus atque doloribus dolorum inventore obcaecati suscipit ex sint excepturi, itaque qui adipisci minus officiis nobis? Neque, expedita possimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum vel inventore adipisci, </h6>

    <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>play Everything</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quisquam modi, possimus atque doloribus dolorum inventore obcaecati suscipit ex sint excepturi, itaque qui adipisci minus officiis nobis? Neque, expedita possimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum vel inventore adipisci, </h6>

   </div>
   <div className='video col-lg-5'>
   <iframe width="100%" height="400" src="https://www.youtube.com/embed/njkr5TJeLH4?si=X-sT5dqxocKiv1eN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
   </div>







    </>
  )
}

export default LandingPage
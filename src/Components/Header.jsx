import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
          <Link to={'/'} style={{color:'white', textDecoration:'none'}}>
          <i class="fa-solid fa-circle-play fa-fade"></i>
            MEDIA-PLAYER
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
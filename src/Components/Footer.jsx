import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
 MDBInput,
 MDBBtn,
 MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><i class="fa-solid fa-video"></i> Video player</h5>
            <ul className='list-unstyled mb-0' style={{textAlign:'left'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dolore, quo obcaecati deleniti doloremque earum quod qui tenetur. Nisi nesciunt illum possimus veniam, quo ratione distinctio necessitatibus asperiores ullam dicta.
            
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled text-align-center mt-3'>
              <li>
                <Link to={'/'} style={{color:'white',textDecoration:'none'}}>Landing Page</Link>
              </li>
              <li>
              <Link to={'/home'} style={{color:'white',textDecoration:'none'}}>Home Page</Link>
              </li>
              <li>
              <Link to={'/watchhistory'} style={{color:'white',textDecoration:'none'}}>Watching History</Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Guides</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                React
                <Link to={'https://react-bootstrap.github.io/docs/getting-started/introduction'} style={{color:'white',textDecoration:'none'}}></Link>
              </li>
              <li>
                Bootstrap
              </li>
              <li>
               Bootswatch
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Contact us</h5>

            <form action=''>
          <MDBRow>
            <MDBCol size='auto' className='mb-4 mb-md-0 alitgn-items-center'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
         <MDBRow className='align-items-center'>
          <span>
          <i class="fa-brands fa-instagram" style={{fontSize:'24px', marginRight:'15px'}}></i>
          <i class="fa-brands fa-facebook" style={{fontSize:'24px', marginRight:'15px'}}></i>
          <i class="fa-brands fa-twitter" style={{fontSize:'24px',  marginRight:'15px'}}></i>
          <i class="fa-brands fa-linkedin" style={{fontSize:'24px',  marginRight:'15px'}}></i>
          </span>
         </MDBRow>
        </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBFooter>

      </>
  )
}

export default Footer
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return <div>
      <div className="Footer">
    <MDBFooter className='text-center' color='white' style={{ backgroundColor:'#06113C'}}>
      <MDBContainer className='p-1'>
       

        <section className='mb-4'>
          <p  style={{ color:'white'}} >
            You can send request and compare yourself with your friends and your global rank you can 
            also check your github stats.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Socails
                  </a>
                </li>

                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Team
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                
              </ul>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>

                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>

                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
              </ul>

            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://github.com/prykdev/HackOverflow_1'>
          Hackoverflow 
        </a>
      </div>
    </MDBFooter>
      </div>
  </div>;
};
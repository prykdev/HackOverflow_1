import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit"
import "./Footer.scss"

export const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <br />
        <MDBFooter
          className='text-center'
          color='white'
          style={{ backgroundColor: "#1A1A2E" }}
        >
          <MDBContainer className='p-1'>
            <section className='mb-4'>
              <p style={{ color: "white" }}>
                You can send request and compare yourself with your friends and
                your global rank you can also check your github stats.
              </p>
            </section>
            <section className=''>
              <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Portfoio</h5>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a
                        href='https://priyankaprasad.vercel.app/'
                        className='text-white'
                      >
                        Priyanka
                      </a>
                    </li>

                    <li>
                      <a href='' className='text-white'>
                        Tushar
                      </a>
                    </li>

                    <li>
                      <a href='' className='text-white'>
                        Ayush
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Team</h5>
                  <ul className='list-unstyled mb-0'>
                    <li>Priyanka</li>
                    <li>Tushar Goyal</li>
                    <li>Ayush singla</li>
                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Github</h5>

                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a
                        href='https://github.com/prykdev'
                        className='text-white'
                      >
                        Prykdev
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://github.com/tgoyal63'
                        className='text-white'
                      >
                        tgoyal63
                      </a>
                    </li>

                    <li>
                      <a
                        href='https://github.com/ayu913'
                        className='text-white'
                      >
                        ayu913
                      </a>
                    </li>
                  </ul>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Linkedin</h5>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/prykdev/'
                        className='text-white'
                      >
                        Prykdev
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/tgoyal63'
                        className='text-white'
                      >
                        tgoyal63
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/ayu913'
                        className='text-white'
                      >
                        ayu913
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className='text-center p-3'
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a
              className='text-white'
              href='https://github.com/prykdev/HackOverflow_1'
            >
              Hackoverflow
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  )
}

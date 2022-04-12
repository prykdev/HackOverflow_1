import React from "react"
import "./Footer.scss"

export const Footer = () => {
  return (
    <>
      <footer className='footer-section'>
        <div className='container'>
          <div className='footer-content pt-5 pb-5'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 mb-50'>
                <div className='footer-widget'>
                  <div className='footer-logo'>
                    <h2>
                      <span>Ha</span>ck<span>ov</span>er<span>Flow</span>
                    </h2>
                  </div>
                  <div className='footer-text'>
                    <p>Thid is footer</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 mb-30'>
                <div className='footer-widget'>
                  <div className='footer-widget-heading'>
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <a href='#'>about</a>
                    </li>
                    <li>
                      <a href='#'>services</a>
                    </li>
                    <li>
                      <a href='#'>services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6 mb-50'>
                <div className='footer-widget'>
                  <div className='footer-widget-heading'>
                    <h3>Follow Us</h3>
                  </div>
                  <div className='footer-text mb-25'>
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className='subscribe-form'>
                    <div className='footer-social-icon'>
                      <span>Follow us</span>
                      <a href='#'>
                        <i className='fab fa-facebook-f facebook-bg'></i>
                      </a>
                      <a href='#'>
                        <i className='fab fa-twitter twitter-bg'></i>
                      </a>
                      <a href='#'>
                        <i className='fab fa-google-plus-g google-bg'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 text-center text-lg-left'>
                <div className='copyright-text'>
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href='https://codepen.io/anupkumar92/'> HackoverFlow</a>
                  </p>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6 d-none d-lg-block text-right'></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

import React from "react"
import "./Setting.css"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
const Setting = () => {
  return (
    <>
      <div className='home'>
        <NavbarComponent />
        <div className='settingContainer'>
          <h1 className='text-center' style={{ color: "#aebed9" }}>
            Profile Settings
          </h1>
          <div className='main-body'>
            <div className='row gutters-sm'>
              <div className='col-md-4 mb-3'>
                <div className='settingCard h-5'>
                  <div className='settingCard-body'>
                    <div className='d-flex flex-column align-items-center text-center'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar7.png'
                        alt='Admin'
                        className='rounded-circle'
                        width='250'
                      />
                      <div className='mt-3'>
                        <h2>Name</h2>
                        <h6 className='text-secondary mb-1'>Username</h6>
                        <h6 className='text-secondary mb-1'>UpVote : 78</h6>
                        <h6 className='text-secondary mb-1'>DownVote : 29</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-8'>
                <form>
                  <div className='settingCard mb-3'>
                    <div className='settingCard-body'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>User Name</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>ayu913</div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Full Name</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          Ayush Singla
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Email</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          fip@jukmuh.al
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Github Username</h6>
                        </div>
                        <div className='col-sm-9 text-secondary'>
                          knvjsdnvjsnjl
                        </div>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>CodeChef Username</h6>
                        </div>
                        <input
                          type='text'
                          className='col-sm-7 text-secondary'
                        />
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Hackerrank Username</h6>
                        </div>
                        <input
                          type='text'
                          className='col-sm-7 text-secondary'
                        />
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-12'>
                          <a className='btn btn-info ms-5 mb-3 ps-3 '>Save</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting

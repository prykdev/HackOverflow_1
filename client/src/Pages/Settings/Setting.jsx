import React, { useEffect, useState } from "react"
import "./Setting.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { useAppContext } from "../../Context/appContext"

const Setting = () => {
  const { getUser, email, username, name, github } = useAppContext()
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    console.log("test")
    getUser()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    console.log("click")
    setIsEdit(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    setIsEdit(false)
  }
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
                        <h2>{name}</h2>
                        <h6 className='text-secondary mb-1'>{username}</h6>
                        <h6 className='text-secondary mb-1'>UpVote : 78</h6>
                        <h6 className='text-secondary mb-1'>DownVote : 29</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-8'>
                <form onSubmit={handleFormSubmit}>
                  <div className='settingCard mb-3'>
                    <div className='settingCard-body'>
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>User Name</h6>
                        </div>
                        <p className='col-sm-5 text-secondary'>{username}</p>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Full Name</h6>
                        </div>
                        <p className='col-sm-5 text-secondary'>{name}</p>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Email</h6>
                        </div>
                        <p className='col-sm-5 text-secondary'>{email}</p>
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Github Username</h6>
                        </div>
                        {isEdit ? (
                          <input
                            type='text'
                            className='col-sm-5 text-secondary'
                            defaultValue={github}
                          />
                        ) : (
                          <p className='col-sm-5 text-secondary'>{github}</p>
                        )}
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>CodeChef Username</h6>
                        </div>
                        {isEdit ? (
                          <input
                            type='text'
                            className='col-sm-5 text-secondary'
                            defaultValue={github}
                          />
                        ) : (
                          <p className='col-sm-5 text-secondary'>{github}</p>
                        )}
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-3'>
                          <h6 className='mb-0'>Hackerrank Username</h6>
                        </div>
                        {isEdit ? (
                          <input
                            type='text'
                            className='col-sm-5 text-secondary'
                            defaultValue={github}
                          />
                        ) : (
                          <p className='col-sm-5 text-secondary'>{github}</p>
                        )}
                      </div>
                      <hr />
                      <div className='row'>
                        <div className='col-sm-12'>
                          {isEdit ? (
                            <button
                              type='submit'
                              className='btn btn-info ms-5 mb-3 ps-3'
                            >
                              SAVE
                            </button>
                          ) : (
                            <button
                              type='button'
                              className='btn btn-info ms-5 mb-3 ps-3'
                              onClick={handleClick}
                            >
                              EDIT
                            </button>
                          )}
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

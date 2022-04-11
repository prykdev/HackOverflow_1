import React, { useEffect, useState } from "react"
import "./Setting.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Setting = () => {
  const initialState = {
    github: "",
    hackerrank: "",
    codechef: "",
  }
  const {
    getUser,
    email,
    username,
    name,
    github,
    hackerrank,
    codechef,
    editSocials,
  } = useAppContext()
  const [isEdit, setIsEdit] = useState(false)
  const [values, setValues] = useState(initialState)

  useEffect(() => {
    getUser()
  }, [])

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    setIsEdit(true)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setIsEdit(false)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const { github, hackerrank, codechef } = values
    const socials = { github, hackerrank, codechef }
    const socialsdata = { socials }
    editSocials(socialsdata)
    getUser()

    setIsEdit(false)
    toast("Socials Changed Successfully")
  }

  return (
    <>
      <div className='home'>
        <NavbarComponent />
        <div className='settings'>
          <Container>
            {/* <h1>Profile Settings</h1> */}
            <Row>
              <Col md={4}>
                <Card className='d-flex flex-column align-items-center text-center'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                    alt='Admin'
                    className='rounded-circle pt-5'
                    width='250'
                  />
                  <h2>{name}</h2>
                  <h6 className='data-text mb-1 p-2'>{username}</h6>
                  <h6 className='data-text mb-1  p-1'>UpVotes : 78</h6>
                  <h6 className='data-text mb-1  p-1'>DownVotes : 29</h6>
                </Card>
              </Col>
              <Col md={8}>
                <Card>
                  <form onSubmit={handleFormSubmit}>
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>User Name</h6>
                      </Col>
                      <Col sm={5}>
                        <p className='data-text'>{username}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>Full Name</h6>
                      </Col>
                      <Col sm={5}>
                        <p className='data-text'>{name}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>Email</h6>
                      </Col>
                      <Col sm={5}>
                        <p className='data-text'>{email}</p>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>Github Username</h6>
                      </Col>
                      {isEdit ? (
                        <Col sm={5}>
                          <input
                            type='text'
                            className='data-text'
                            required
                            name='github'
                            value={values.github}
                            onChange={handleChange}
                          />
                        </Col>
                      ) : (
                        <Col sm={5}>
                          <p className='data-text'>{github}</p>
                        </Col>
                      )}
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>CodeChef Username</h6>
                      </Col>
                      {isEdit ? (
                        <Col sm={5}>
                          <input
                            type='text'
                            className='data-text'
                            required
                            name='codechef'
                            value={values.codechef}
                            onChange={handleChange}
                          />
                        </Col>
                      ) : (
                        <Col sm={5}>
                          <p className='data-text'>{codechef}</p>
                        </Col>
                      )}
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={4}>
                        <h6 className='mb-0'>Hackerrank Username</h6>
                      </Col>
                      {isEdit ? (
                        <Col sm={5}>
                          <input
                            type='text'
                            className='data-text'
                            required
                            name='hackerrank'
                            value={values.hackerrank}
                            onChange={handleChange}
                          />
                        </Col>
                      ) : (
                        <Col sm={5}>
                          <p className='data-text'>{hackerrank}</p>
                        </Col>
                      )}
                    </Row>
                    <hr />
                    <Row>
                      <Col sm={12}>
                        {isEdit ? (
                          <div>
                            <Button
                              type='submit'
                              className='btn btn-info ms-5 mb-3 ps-3'
                            >
                              SAVE
                            </Button>
                            <Button
                              type='reset'
                              onClick={handleCancel}
                              className='btn btn-danger ms-5 mb-3 ps-3'
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <Button
                            type='button'
                            className='btn btn-info ms-5 mb-3 ps-3'
                            onClick={handleClick}
                          >
                            EDIT
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Setting

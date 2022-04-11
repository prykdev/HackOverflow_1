import React, { useEffect } from "react"
import "./Dashboard.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { Footer } from "../../Components/Footer/Footer.jsx"
import { useAppContext } from "../../Context/appContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper core and required modules. In this example,
// we will use Pagination and Coverflow
import SwiperCore, { Pagination, EffectCoverflow } from "swiper"

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow])

const Dashboard = () => {
  const {
    getGithub,
    graph,
    stats,
    mul,
    contributions,
    githubUsername,
    public_repos,
    public_gists,
    followers,
    following,
    organizations,
    github_created_at,
    getHackerrank,
    hackerrankUsername,
    hackerrank_created_at,
    level,
    followers_count,
    totalSubmissions,
    totalBadges,
    getCodechef,
    codechefUsername,
    ratings,
    language,
    band,
    div,
    global,
    country,
    badgeData,
    submissionStats,
    isGithubError,
  } = useAppContext()

  useEffect(async () => {
    await getGithub()
    await getHackerrank()
    await getCodechef()
    if (isGithubError) {
      toast("Github API rate limit exceeded!!!")
    }
  }, [])

  return (
    <div className='dashboardHome'>
      <Outlet />
      <NavbarComponent />
      <div className='github'>
        <div className='container'>
          <div className='header'>
            <h3 className='heading'>GitHub</h3>
            {/* <img src={require("../../assets/GitHub-Mark-Light-32px.png")}  alt="github" /> */}
            <h6>
              username: <span className='username'>{githubUsername}</span>
            </h6>
          </div>
          <Row>
            <Col lg={12} className='githubStats'>
              <img src={graph} width='100%' />
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='githubStats'>
              <img src={stats} width='100%' />
            </Col>
            <Col lg={6} className='githubStats'>
              <img src={contributions} width='100%' />
            </Col>
          </Row>
          <Row>
            <Col lg={6} className='githubStats'>
              <img src={mul} width='100%' />
            </Col>
            <Col lg={6} className='githubStats'>
              <Card className='g-card'>
                <Card.Body>
                  <Card.Title>GitHub Data</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg={6}>Public Repos: {public_repos}</Col>
                      <Col lg={6}>Followers: {followers}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Public Gists: {public_gists}</Col>
                      <Col lg={6}>Following: {following}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Created: {github_created_at}</Col>
                      <Col lg={6}>Organizations: {organizations}</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className='hackerrank'>
        <div className='container'>
          <div className='header'>
            <h3 className='heading'>Hackerrank</h3>
            {/* <img src={require("../../assets/GitHub-Mark-Light-32px.png")}  alt="github" /> */}
            <h6>
              username: <span className='username'>{hackerrankUsername}</span>
            </h6>
          </div>
          <Row>
            <Col lg={6} className='githubStats'>
              <Card className='g-card'>
                <Card.Body>
                  <Card.Title>Hackerrank Data</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg={6}>Level: {level}</Col>
                      <Col lg={6}>Followers: {followers_count}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Submission: {totalSubmissions}</Col>
                      <Col lg={6}>Badges: {totalBadges}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Created: {hackerrank_created_at}</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className='githubStats'>
              <Card className='g-card'>
                <Card.Body>
                  <Card.Title>Hackerrank Badges</Card.Title>
                  <Card.Text>
                    <Row>
                      {badgeData &&
                        badgeData.map((badge) => {
                          return (
                            <Col lg={6} className='p-2'>
                              {badge.badge_name} {badge.stars}⭐
                            </Col>
                          )
                        })}
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className='codechef'>
        <div className='container'>
          <div className='header'>
            <h3 className='heading'>Codechef</h3>
            {/* <img src={require("../../assets/GitHub-Mark-Light-32px.png")}  alt="github" /> */}
            <h6>
              username: <span className='username'>{codechefUsername}</span>
            </h6>
          </div>
          <Row>
            <Col lg={6} className='githubStats'>
              <Card className='g-card'>
                <Card.Body>
                  <Card.Title>CodeChef Data</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg={6}>Ratings: {ratings}</Col>
                      <Col lg={6}>Global Rank: {global}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Language: {language}</Col>
                      <Col lg={6}>Country Rank: {country}</Col>
                    </Row>
                    <Row>
                      <Col lg={6}>Band: {band}</Col>
                      <Col lg={6}>Div: {div}</Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className='githubStats'>
              <Card className='g-card'>
                <Card.Body>
                  <Card.Title>CodeChef Submission Stats</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg={6}>
                        Partially Solved:{" "}
                        {submissionStats &&
                          submissionStats.partiallySolvedProblems}
                      </Col>
                      <Col lg={6}>
                        Solved Problems:{" "}
                        {submissionStats && submissionStats.solvedProblems}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        Attempted Problems:{" "}
                        {submissionStats && submissionStats.attemptedProblems}
                      </Col>
                      <Col lg={6}>
                        Time Limit exceeded:{" "}
                        {submissionStats && submissionStats.timeLimitExceed}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        Submitted Solutions:{" "}
                        {submissionStats && submissionStats.submittedSolutions}
                      </Col>
                      <Col lg={6}>
                        Wrong Submissions:{" "}
                        {submissionStats && submissionStats.wrongSubmissions}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        Accepted Submission:{" "}
                        {submissionStats && submissionStats.acceptedSubmissions}
                      </Col>
                      <Col lg={6}>
                        RunTime Error:{" "}
                        {submissionStats && submissionStats.runTimeError}
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {isGithubError ? <ToastContainer /> : <></>}
      <Footer />
    </div>
  )
}

export default Dashboard

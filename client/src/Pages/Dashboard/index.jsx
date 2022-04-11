import React, { useEffect } from "react"
import "./styles.scss"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
import { Outlet } from "react-router-dom"
import { Container, Row, Col, Card, Button , ListGroup} from "react-bootstrap"
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
      <div className="github">
        <div className="container">
          <div className="header">
            <h3 className="heading">GitHub</h3>
            <img src={require("../../assets/GitHub-Mark-Light-32px.png")}  alt="github" />
            <h6>username: <span className="username">{githubUsername}</span></h6>
          </div>
          <Row>
            <Col lg={12} className="githubStats">
              <img src={graph} width='100%' />
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="githubStats">
              <img src={stats} width='100%' />
            </Col>
            <Col lg={6} className="githubStats">
              <img src={contributions} width='100%' />
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="githubStats">
              <img src={mul} width='100%' />
            </Col>
            <Col lg={6} className="githubStats">
              <Card className="g-card">
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
      <div className='dashboardCard text-center'>
        <h1>Github</h1>
        <h6>&#123;Github username:{githubUsername}&#125;</h6>
        <div className='card-container'>
          <Container>
            <Row>
              <Col lg={12}>
                <h4> Contribution graph </h4>
                <img src={graph} width='60%' />
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <h4> Github Stats </h4>
                <img src={stats} width='100%' />
              </Col>
              <Col lg={4}>
                <h4>Most Used Languages </h4>
                <img src={mul} width='100%' />
              </Col>
              <Col lg={4}>
                <h4>Contributions</h4>
                <img src={contributions} width='100%' />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className='github-cards'>
                <div className='github-card'>
                  <h3>
                    <p>Public Repos</p>
                  </h3>
                  <p>{public_repos}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Public Gists</p>
                  </h3>
                  <p>{public_gists}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Followers</p>
                  </h3>
                  <p>{followers}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Following</p>
                  </h3>
                  <p>{following}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Organizations</p>
                  </h3>
                  <p>{organizations}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Created</p>
                  </h3>
                  <p>{github_created_at}</p>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>

      <div className='dashboardCard text-center'>
        <h1>Hackerrank</h1>
        <h6>&#123;Hackerrank username:{hackerrankUsername}&#125;</h6>
        <div className='card-container'>
          <Container>
            <Row>
              <div className='github-cards'>
                <div className='github-card'>
                  <h3>
                    <p>Level</p>
                  </h3>
                  <p>{level}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Followers</p>
                  </h3>
                  <p>{followers_count}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Submissions</p>
                  </h3>
                  <p>{totalSubmissions}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Badges</p>
                  </h3>
                  <p>{totalBadges}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Created</p>
                  </h3>
                  <p>{hackerrank_created_at}</p>
                </div>
              </div>
            </Row>
          </Container>
          <Container>
            <Row>
              <h2>Badges</h2>
              <div className='photo-container'>
                {totalBadges > 2 ?
                  (<Swiper
                    effect='coverflow'
                    grabCursor='true'
                    centeredSlides='true'
                    spaceBetween={0}
                    slidesPerView={4}
                    loop='true'
                    pagination={{ clickable: true, dynamicBullets: true }}
                    coverflowEffect={{
                      rotate: 10,
                      stretch: 15,
                      depth: 150,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    breakpoints={{
                      700: {
                        spaceBetween: 0,
                        slidesPerView: 4,
                      },
                      500: {
                        spaceBetween: 100,
                        slidesPerView: 2,
                      },
                      411: {
                        spaceBetween: 100,
                        slidesPerView: 2,
                      },
                      300: {
                        spaceBetween: 0,
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {badgeData &&
                      badgeData.map((badge) => {
                        return (
                          <SwiperSlide>
                            <div className='swiper-card'>
                              <h3>
                                <p>{badge.badge_name}</p>
                              </h3>
                              <p>{badge.stars}⭐</p>
                            </div>
                          </SwiperSlide>
                        )
                      })}
                  </Swiper>) : <></>}
                {totalBadges < 2 ? (<Swiper>
                  {badgeData &&
                    badgeData.map((badge) => {
                      return (
                        <SwiperSlide>
                          <div className='swiper-card'>
                            <h3>
                              <p>{badge.badge_name}</p>
                            </h3>
                            <p>{badge.stars}⭐</p>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                </Swiper>) : <></>}
              </div>
            </Row>
          </Container>
        </div>
      </div>

      <div className='dashboardCard text-center'>
        <h1>Codechef</h1>
        <h6>&#123;Codechef username:{codechefUsername}&#125;</h6>
        <div className='card-container'>
          <Container>
            <Row>
              <div className='github-cards'>
                <div className='github-card'>
                  <h3>
                    <p>Ratings</p>
                  </h3>
                  <p>{ratings}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Global Rank</p>
                  </h3>
                  <p>{global}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Local Rank</p>
                  </h3>
                  <p>{country}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Language</p>
                  </h3>
                  <p>{language}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Band</p>
                  </h3>
                  <p>{band}</p>
                </div>
                <div className='github-card'>
                  <h3>
                    <p>Div</p>
                  </h3>
                  <p>{div}</p>
                </div>
              </div>
            </Row>
          </Container>
          <Container>
            <Row>
              <h2>Submissions Stats</h2>
              <div className='photo-container'>
                <Swiper
                  effect='coverflow'
                  grabCursor='true'
                  centeredSlides='true'
                  spaceBetween={0}
                  slidesPerView={4}
                  loop='true'
                  pagination={{ clickable: true, dynamicBullets: true }}
                  coverflowEffect={{
                    rotate: 10,
                    stretch: 15,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  breakpoints={{
                    700: {
                      spaceBetween: 0,
                      slidesPerView: 4,
                    },
                    500: {
                      spaceBetween: 100,
                      slidesPerView: 2,
                    },
                    411: {
                      spaceBetween: 100,
                      slidesPerView: 2,
                    },
                    300: {
                      spaceBetween: 0,
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Partially Solved</p>
                      </h3>
                      <p>
                        {submissionStats && submissionStats.partiallySolvedProblems}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Solved Problems</p>
                      </h3>
                      <p>{submissionStats && submissionStats.solvedProblems}</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Attempted Problems</p>
                      </h3>
                      <p>
                        {submissionStats && submissionStats.attemptedProblems}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Submitted Solutions</p>
                      </h3>
                      <p>
                        {submissionStats && submissionStats.submittedSolutions}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Wrong Submissions</p>
                      </h3>
                      <p>
                        {submissionStats && submissionStats.wrongSubmissions}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>Accepted Submission</p>
                      </h3>
                      <p>
                        {submissionStats && submissionStats.acceptedSubmissions}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='swiper-card'>
                      <h3>
                        <p>RunTime Error</p>
                      </h3>
                      <p>{submissionStats && submissionStats.runTimeError}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      {isGithubError ? <ToastContainer /> : <></>}
      <Footer />
    </div>
  )
}

export default Dashboard

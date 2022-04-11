import React from "react"
import "./Github.scss"
import { useAppContext } from "../../Context/appContext"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"

const Github = () => {
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
  return (
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
  )
}

export default Github

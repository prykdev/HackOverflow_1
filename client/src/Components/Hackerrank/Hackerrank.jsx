import React from "react"
import "./Hackerrank.scss"
import { useAppContext } from "../../Context/appContext"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"

const Hackerrank = () => {
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
  )
}

export default Hackerrank

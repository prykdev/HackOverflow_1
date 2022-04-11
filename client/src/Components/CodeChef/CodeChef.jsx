import React from "react"
import "./CodeChef.scss"
import { useAppContext } from "../../Context/appContext"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"

const CodeChef = () => {
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
    socials,
  } = useAppContext()
  return (
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
  )
}

export default CodeChef

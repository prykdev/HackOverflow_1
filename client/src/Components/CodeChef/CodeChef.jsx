import React, { useEffect } from "react"
import "./CodeChef.scss"
import { useAppContext } from "../../Context/appContext"
import { Container, Row, Col, Card } from "react-bootstrap"

const CodeChef = (props) => {
  const { username } = props
  const {
    getCodechef,
    codechefUsername,
    ratings,
    language,
    band,
    div,
    global,
    country,
    submissionStats,
  } = useAppContext()
  useEffect(async () => {
    getCodechef(username)
  }, [username])
  return (
    <div className='codechef'>
      <Container>
        <div className='header'>
          <h3 className='heading'>Codechef</h3>
          <h6>
            username: <span className='username'>{codechefUsername}</span>
          </h6>
        </div>
        <Row>
          <Col lg={6} className='codechefStats'>
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
          <Col lg={6} className='codechefStats'>
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
      </Container>
    </div>
  )
}

export default CodeChef

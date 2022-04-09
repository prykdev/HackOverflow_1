import React from "react"
import Table from "../../Components/LeaderBoard/Table/Table"
import "./Leaderboard.scss"
const Leaderboard = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='main-header'>Leaderboard</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='overflow-table'>
            <Table />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

import React from "react"
import "./Dashboard.css"
import NavbarComponent from "../../Components/Navbar/NavbarComponent"
const Dashboard = () => {
  return (
    <div className='home'>
      <NavbarComponent />
      <div className='dashboardCard text-center'>
        <h1>Github</h1>
        <div className='grid-container'>
          <div className='item2'>
            <h4> Github Stats </h4>
            <img
              src='https://github-readme-stats.vercel.app/api?username=prykdev&show_icons=true&theme=tokyonight'
              // width='80%'
            />
          </div>

          <div className='item3'>
            <h4>Most Used Languages </h4>
            <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=prykdev&theme=tokyonight&layout=compact' />
          </div>

          <div className='item4'>
            <h4>Contributions</h4>
            <img
              src='https://github-readme-streak-stats.herokuapp.com/?user=prykdev&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6'
              // width='74%'
            />
          </div>

          <div className='item1'>
            <h4> Contribution graph </h4>
            <img
              src='https://activity-graph.herokuapp.com/graph?username=prykdev&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true'
              // width='80%'
            />
          </div>
        </div>
      </div>
      <h1> Score </h1>
    </div>
  )
}

export default Dashboard

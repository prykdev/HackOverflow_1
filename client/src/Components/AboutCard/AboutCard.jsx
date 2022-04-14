import React from "react"
import "./AboutCard.scss"
import { Link } from "react-router-dom"
export const AboutCard = (props) => {
  return (
    <>
      <div className='about-card'>
        <div className='about-name'>{props.role}</div>
        <div className='about-content'>
          <img src={props.img} alt='...' />
          <div className='about-name2'>
            <h1>{props.name}</h1>
          </div>
          <div className='about-portfolio'>
            <a href={props.portfolio} target='_blank'>
              Portfolio
            </a>
          </div>

          <div className='about-socials'>
            <a href={props.linkedin} className='twitter'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href={props.github} className='twitter'>
              <i className='fa fa-github'></i>
            </a>
            <a href={props.email} className='twitter'>
              <i className='fa fa-envelope'></i>
            </a>
            <a href={props.twitter} className='twitter'>
              <i className='fa fa-twitter'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

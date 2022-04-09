import React, { useContext } from 'react';
import './Homepage.scss';
import Button from '@material-ui/core/Button';
import img1 from './img-1.svg';
import img2 from './img-2.svg';
import NavbarComponent from '../../Components/Navbar/NavbarComponent';
import { useLocation } from "react-router-dom"

import {
    Link
} from "react-router-dom";

export const Homepage = () => {
  const {pathname} = useLocation();


  return (
    <div>
     <NavbarComponent pathname={pathname}/>

      <div id="home">
        <div className="home-container">
          <div className="home-content">
            <div className="home-lead">
              <span>I</span>ntroducing Hackoverflow, <br />A revolution in education
            </div>

            <div className="home-text">
              <span>A</span>n educational platform where you can learn what ever
              you want with no cost. You can also contribute to the website,
              clear doubts of other students and also teach students with
              financial problems.
            </div>

            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button
                style={{ marginTop: 25, color: "#fff" }}
                size="large"
                variant="contained"
                color="primary"
                disableElevation
              >
                Register
              </Button>
            </Link>
          </div>

          <img className="home-img" src={img2} alt="" />
        </div>
      </div>

      <div id="home">
        <div className="home-container">
          <img className="home-img" src={img1} alt="" />

          <div className="home-content">
            <div className="home-lead-right">
              <span>I</span>t's open source, <br />
              Use it as you like!
            </div>

            <div className="home-text-right">
              <span>W</span>e provide you quality education with no cost.
              Connect with finest teachers around you and get access to notes ,
              materials and many more .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

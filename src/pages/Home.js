import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import TextTransition, { presets } from 'react-text-transition';
import circleLogo from '../assets/images/circleLogo.png'


const Home = () => {
    return (
        <div className='home'>
            <div className='name'>
            <img
                src={circleLogo}
                target="_blank"
               
                alt="logo"
                width="75%"
              height="auto"
              />
            </div>
            <div className='desc'>
            <Link to="/portfolio" className="text-white">
                    Stacker.<br></br>
                  </Link>
                  <Link to="https://rosebudsara.com/" target='blank' className="text-white">
                    <i className=""></i>Clicker. <br></br>
                  </Link>
                  <Link to="#" className="text-white">
                    <i className=""></i>Crooner.<br></br>
                  </Link>
                  <Link to="#" className="text-blue">
                    <i className=""></i><TypeAnimation
                sequence={[
                  "Story Teller",
                  1000,
                  "Bed Time Story Teller.",
                  1000,
                 
                ]}
                speed={50}
                repeat={0}
               
              />
                  </Link>
            </div>
        </div>
    );
};

export default Home;
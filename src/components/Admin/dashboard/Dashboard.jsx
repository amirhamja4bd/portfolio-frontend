import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Import the CSS file
import { BsLayersHalf , BsTextIndentRight , BsFillRecord2Fill} from 'react-icons/bs';
import { FiLogOut} from 'react-icons/fi';
import image from "../../../assets/img/mee.png";
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from '../../../helper/FormHHelper';

function Dashboard() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallDevice = window.matchMedia('(max-width: 768px)').matches;
      setIsActive(!isSmallDevice);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='dashboard'>
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo_content">
        <div className="logo">
          <NavLink to="/" activeclassname="active">
            <h3 className="links_name mt-4 ms-2">PORTFOLIO</h3>
          </NavLink>
        </div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}><BsTextIndentRight/></i>
      </div>
      <ul className="nav_list">
        <li>
          <NavLink to="dashboard" activeclassname="active">
            <i className="bx bx-user"><BsLayersHalf/></i>
            <span className="links_name">Dashboard</span>
          </NavLink>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <NavLink to="intro/list" activeclassname="active">
            <i className="bx bx-user"><BsLayersHalf/></i>
            <span className="links_name">Intro</span>
          </NavLink>
          <span className="tooltip">Intro</span>
        </li>
        <li>
          <NavLink to="about" activeclassname="active">
            <i className="bx bx-chat"><BsLayersHalf/></i>
            <span className="links_name">About</span>
          </NavLink>
          <span className="tooltip">About</span>
        </li>
        <li>
          <NavLink to="services" activeclassname="active">
            <i className="bx bx-pie-chart-alt-2"><BsLayersHalf/></i>
            <span className="links_name">Services</span>
          </NavLink>
          <span className="tooltip">Services</span>
        </li>
        <li>
          <NavLink to="skills" activeclassname="active">
            <i className="bx bx-folder"><BsLayersHalf/></i>
            <span className="links_name">Skills</span>
          </NavLink>
          <span className="tooltip">Skills</span>
        </li>
        <li>
          <NavLink to="experience" activeclassname="active">
            <i className="bx bx-cart-alt"><BsLayersHalf/></i>
            <span className="links_name">Experience</span>
          </NavLink>
          <span className="tooltip">Experience</span>
        </li>
        <li>
          <NavLink to="portfolio" activeclassname="active">
            <i className="bx bx-heart"><BsLayersHalf/></i>
            <span className="links_name">Portfolio</span>
          </NavLink>
          <span className="tooltip">Portfolio</span>
        </li>
        <li>
          <NavLink to="testimonials" activeclassname="active">
            <i className="bx bx-cog"><BsLayersHalf/></i>
            <span className="links_name">Testimonial</span>
          </NavLink>
          <span className="tooltip">Testimonial</span>
        </li>
        <li>
          <NavLink to="contact" activeclassname="active">
            <i className="bx bx-cog"><BsLayersHalf/></i>
            <span className="links_name">Contact</span>
          </NavLink>
          <span className="tooltip">Contact</span>
        </li>
        </ul>
      <div className="content">
        <div className="user">
          <div className="user_details">
            <img src={image} alt="" />
            <div className="name_job">
              <div className="name">Amir Hamza</div>
              <div className="job">Web Developer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out" onClick={logOut} ><FiLogOut/></i>
        </div>
      </div>
    </div>
    <div className=''style={isActive ? { marginLeft: '13rem', transition: 'margin-left 0.4s ease' } : { marginLeft: '3rem', transition: 'margin-left 0.4s ease' }} >
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

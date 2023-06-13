import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo_content">
        <div className="logo">
          <div className="logo_name">Code4education</div>
        </div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav_list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." onClick={toggleSidebar} />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">File Manager</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
        </ul>
      <div className="content">
        <div className="user">
          <div className="user_details">
            <img src="images/profile.jpg" alt="" />
            <div className="name_job">
              <div className="name">Bhaskar Gupta</div>
              <div className="job">Web Designer</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

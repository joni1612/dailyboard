import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/dailyboard" className="navbar-brand">
        DailyBoard
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/dailyboard" className="nav-link">
              Quote
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/dailyboard/image" className="nav-link">
              Image
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/dailyboard/todo" className="nav-link">
              DailyGoal{" "}
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/dailyboard/weather" className="nav-link">
              Weather
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/news" className="nav-link">
              News
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;

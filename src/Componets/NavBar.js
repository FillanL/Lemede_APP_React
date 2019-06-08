import React, { Component } from "react";
import "../CssContainer/NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li>LEMEDE</li>
          <li />
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Explore"> Explore</Link>
          </li>
          <li>
            <Link to="/NewCampaign">new campaign</Link>
          </li>
          <li>
            <Link to="/Signup">Sign up</Link>
          </li>
          <li>
            <Link to="/LogIn">Log in</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default NavBar;

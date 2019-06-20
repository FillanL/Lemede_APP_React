import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../CssContainer/AccountNav.css";

export default class AccountNav extends Component {
  render() {
    return (
      <div className="nav account-nav">
        <ul>
          <li className="" onClick={(e)=>this.props.page(e,"favorite")}>
            
              Favorites
              
          </li>
          <li onClick={(e)=>this.props.page(e,"campaigns")}>
           
              Campaigns
              
          </li>
          <li onClick={(e)=>this.props.page(e,"edit")}>
              Edit Account
          </li>
          {/* <li>
            <Link>Messages</Link>
          </li>
          <li>
            <Link>Friends</Link>
          </li>
          <li>
            <Link>Alerts</Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

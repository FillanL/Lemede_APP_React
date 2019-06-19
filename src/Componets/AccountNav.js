import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CssContainer/AccountNav.css";

export default class AccountNav extends Component {
  render() {
    return (
      <div className="nav account-nav">
        <ul>
          <li onClick={()=>this.props.page("favorite")}>
            {/* <Link to="/MyAccount/Favorites"> */}
              Favorites
              {/* </Link> */}
          </li>
          <li onClick={()=>this.props.page("campaigns")}>
            {/* <Link to="/MyAccount/campaigns"> */}
              Campaigns
              {/* </Link> */}
          </li>
          <li>
            <Link to="/MyAccount/edit">Edit Account</Link>
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

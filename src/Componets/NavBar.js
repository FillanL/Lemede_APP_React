import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../CssContainer/NavBar.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOutCurrent } from "../Actions/authUserActions";

class NavBar extends Component {
  // this.props.
  render() {
    const { currentUser } = this.props;
    // console.log(this.props);

    return (
      <nav>
        <ul className="nav">

          <li className="logo">
          <Link to="/">
          L<span className="e-span">E</span>M<span className="e-span">E</span>D<span className="e-span">E</span>
          </Link>
          </li>
          <li />
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Explore/1"> Explore</Link>
          </li>
          <li>
            <Link to="/NewCampaign">Create A Campaign</Link>
          </li>
          {currentUser !== null ? (
            <>
              <li>
                <Link to="/" onClick={() => this.props.signOutCurrent()}>
                  Log out
                </Link>
              </li>
              <li>
                <Link to="/MyAccount">
                Account
                </Link>
                
                </li>
              <li>
                {this.props.valid && currentUser ? (
                  <div className="wallet">
                    <FontAwesomeIcon alt="wallet" icon={['fas', 'wallet']} size="lg" /> $ {currentUser.account_balance.toLocaleString()} 
                    <Link to="/addBalance">
                  <button>Add Money</button>
                    </Link>
                  </div>
                ) : (
                  <><FontAwesomeIcon icon={['fa', 'wallet']} size="lg" />: loading</>
                )}
              </li>
              <li>Welcome,<Link to={`/Profile/${currentUser.id}`}> {currentUser.first_name}</Link></li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Signup">Sign up</Link>
              </li>
              <li>
                <Link to="/LogIn">Log in</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  valid: state.user.valid
});
export default connect(
  mapStateToProps,
  { signOutCurrent }
)(NavBar);

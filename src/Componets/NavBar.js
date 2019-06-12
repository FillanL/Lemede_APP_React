import React, { Component } from "react";
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
                    Wallet: {currentUser.account_balance.toLocaleString()} 
                    <Link to="/addBalance">
                  <button>Add Money</button>
                    </Link>
                  </div>
                ) : (
                  <>Wallet: loading</>
                )}
              </li>
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
      </div>
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

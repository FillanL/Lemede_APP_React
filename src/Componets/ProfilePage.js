import React, { Component } from "react";
import { connect } from "react-redux";

import { handleProfileClicked } from "../Actions/getActions";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.handleProfileClicked(Number(this.props.match.params.id));

    console.log("anfsla",this.props.user);
    
  }

  render() {
    return (
    <>
        { this.props.user && this.props.viewProfile ? 
            <div>
                hello
                <p>{this.props.user.username}</p>
                <p>{this.props.user.first_name}</p>
                <p>{this.props.user.last_name}</p>
            </div> 
        : null
        }
    </>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.allUsers.find(user => user.id === state.user.viewProfile),
    viewProfile: state.user.viewProfile
  }
}
export default connect(
  mapStateToProps,
  { handleProfileClicked }
)(ProfilePage);

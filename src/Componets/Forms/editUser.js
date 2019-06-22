import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";

import '../../CssContainer/editCamp.css'
import { deleteCurrentUser } from "../../Actions/authUserActions";

class EditUser extends Component {

  handleDeleteClick = () => {
    // console.log("here");
    let valid = window.confirm(
      "are you should you'd like to delete your account?"
    );

    if (valid) {
        // 
        console.log("true");
        console.log(this.props.user.id);
        
        this.props.deleteCurrentUser(this.props.user.id)
        
        this.props.history.push('/')
    }

  };

  render() {
        // this.props.history.push('/')
        console.log(this.props.history);
      

    return (
      <>
        {this.props.user ? (
          <div>
            {/* edit user
            <p>{this.props.user.username}</p> */}
            <button onClick={() => this.handleDeleteClick()}>
              Delete Account
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.currentUser
  };
};
export default withRouter(connect(
  mapStateToProps,
  { deleteCurrentUser }
)(EditUser))

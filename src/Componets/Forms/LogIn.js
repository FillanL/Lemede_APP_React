import React, { Component } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../Actions/authUserActions";

class LogIn extends Component {
  state = {
    logIn: {
      username: "",
      password: ""
    }
  };

  handleLogIn = e => {
    e.preventDefault();
    // console.log("sign in", e.target);
    this.setState({
      logIn: {
        username: "",
        password: ""
      }
    });
    this.props.logInUser(this.state.logIn)
      .then(data => {
        if(data.errors) {

        } else {
          this.props.history.push('/')
        }
      })
  };
  handleInputChanges = e => {
    this.setState({
      logIn: {
        ...this.state.logIn,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <form onSubmit={e => this.handleLogIn(e)}>
          <label htmlFor="username" />
          <input
            onChange={e => this.handleInputChanges(e)}
            name="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="" />
          <input
            onChange={e => this.handleInputChanges(e)}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mapstate=(state)=>({
    current: state
})
export default connect(mapstate, {logInUser})(LogIn);

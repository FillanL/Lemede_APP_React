import React, { Component } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../Actions/authUserActions";
import "../../CssContainer/login.css"

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
      error:false,
      logIn: {
        username: "",
        password: ""
      }
    });
    this.props.logInUser(this.state.logIn)
      .then(data => {

        if(data.error) {
          // this.props.history.push('/Login')
          // this.props.history.push('/')
          this.setState({
            error: true
          })
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
    

    return (
      <div className="log-in-container">
       { this.state.error ? 
       <div>  <h3>Please Check Username and Password</h3></div>
      : null}
        <form onSubmit={e => this.handleLogIn(e)}>
          <label htmlFor="username" />
          <input
            onChange={e => this.handleInputChanges(e)}
            minLength="4" 
            maxLength="12"
            name="username"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="" />
          <input
            onChange={e => this.handleInputChanges(e)}
            minLength="3" 
            maxLength="24"
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

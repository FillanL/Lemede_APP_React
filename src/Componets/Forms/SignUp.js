import React, { Component } from "react";
import { connect } from "react-redux";

import { createUser } from "../../Actions/authUserActions";
import '..//../CssContainer/signup.css'


class SignUp extends Component {
  state = {
    signUpValues: {
      first_name: "",
      last_name: "",
      location: "",
      username: "",
      password: "",
      age: "",
      profession: "",
      user_img: "",
      bio:""
    }
  };

  handleSignUp = e => {
    e.preventDefault();
    // POST/create new user 
    this.props.createUser(this.state.signUpValues);

    // reset state after submitteed
    this.setState({
      signUpValues: {
        first_name: "",
        last_name: "",
        location: "",
        username: "",
        password: "",
        age: "",
        profession: "",
        user_img: "",
        bio: ""
      }
    });
        this.props.history.push('/Login')
        
  };

  handleInputChange = e => {
    // console.log(this.state.signUpValues);

    this.setState({
      signUpValues: {
        ...this.state.signUpValues,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    // console.log(this.state.signUpValues);

    const {
      first_name,
      last_name,
      location,
      username,
      password,
      age,
      profession,
      user_img,
      bio
    } = this.state.signUpValues;

    return (
      <div className="signup-bg">

        <form onSubmit={e => this.handleSignUp(e)}>
        <p>Create an account</p>
          <input
            onChange={e => this.handleInputChange(e)}
            name="first_name"
            type="text"
            placeholder="First Name"
            value={first_name}
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={last_name}
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="age"
            type="text"
            placeholder="Age"
            value={age}
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="profession"
            type="text"
            placeholder="Profession"
            value={profession}
          />
          {/* <label htmlFor="username">username</label> */}
          <input
            onChange={e => this.handleInputChange(e)}
            name="location"
            type="text"
            placeholder="location"
            value={location}
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="username"
            type="text"
            placeholder="Username"
            value={username}
          />
          {/* <label htmlFor="" /> */}
          <input
            onChange={e => this.handleInputChange(e)}
            name="password"
            type="password"
            placeholder="Password"
            value={password}
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="user_img"
            type="text"
            placeholder="profile Image"
            value={user_img}
          />
          <textarea
            onChange={e => this.handleInputChange(e)}
            name="bio"
            type="textfeild"
            placeholder="Tell us about you"
            value={bio}
            rows="30em"
            cols="40em"
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createUser }
)(SignUp);

import React, { Component } from "react";
import { connect } from "react-redux";

import { addAccountBalance } from "../Actions/authUserActions";

class IncreaseBalance extends Component {
  state = {
    addAmount: "",
    error: false
  };
  handleBtnClick = e => {
    this.setState({
      addAmount: e.target.value
    });
  };
  handimput = e => {
    console.log(this.state.addAmount);

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  handleValueSubmit = e => {
    e.preventDefault();
    console.log("here vallue", this.props.user.id) 
    if (this.state.addAmount > 0 ){

        this.props.addAccountBalance(this.props.user.id,this.state.addAmount);

        this.setState({
            ...this.state,
            addAmount: "",
            error: false
        })
    }else{
        this.setState({
            error:true
        })
    }
  };
  render() {
    return (
      <div>
          {
              this.state.error ? <h4>AMOUNT CANNNOT BE LESS THAT ZERO</h4>: null
          }
        <div>
          <button onClick={e => this.handleBtnClick(e)} value="10">
            10
          </button>
          <button onClick={e => this.handleBtnClick(e)} value="20">
            $20
          </button>
          <button onClick={e => this.handleBtnClick(e)} value="50">
            $50
          </button>
          <button onClick={e => this.handleBtnClick(e)} value="100">
            $100
          </button>
          <button onClick={e => this.handleBtnClick(e)} value="1000">
            $1,000
          </button>
        </div>
        <div>
          <form onSubmit={e => this.handleValueSubmit(e)}>
            <input
              name="addAmount"
              onChange={e => this.handimput(e)}
              type="number"
              placeholder="Add Amount"
              value={this.state.addAmount.toLocaleString()}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateTOProps=(state)=>({
    user: state.user.currentUser
})
export default connect(
    mapStateTOProps,
  { addAccountBalance }
)(IncreaseBalance);

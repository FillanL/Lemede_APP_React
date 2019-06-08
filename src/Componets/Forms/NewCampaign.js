import React, { Component } from "react";
import { connect } from "react-redux";
import { createCampaign } from "../../Actions/campaignsActions";

class NewCampaign extends Component {
  state = {
    newCampaign: {
      title: "",
      description: "",
      location: "",
      category: "",
      funding_goal: ""
    }
  };
  handleChange = e => {
    this.setState({
      newCampaign: {
        ...this.state.newCampaign,
        [e.target.name]: e.target.value
      }
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.props.createCampaign(this.state.newCampaign);

    this.setState({
        newCampaign: {
            title: "",
            description: "",
            location: "",
            category: "",
            funding_goal: ""
          }
    })
  };

  render() {
    console.log("props", this.props);

    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            onChange={e => this.handleChange(e)}
            name="title"
            type="text"
            placeholder="title"
            value={this.state.newCampaign.title}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="description"
            type="text"
            placeholder="description"
            value={this.state.newCampaign.description}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="location"
            type="text"
            placeholder="location"
            value={this.state.newCampaign.location}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="category"
            type="text"
            placeholder="category"
            value={this.state.newCampaign.category}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="funding_goal"
            type="text"
            placeholder="Funding Goal"
            value={this.state.newCampaign.funding_goal}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createCampaign }
)(NewCampaign);

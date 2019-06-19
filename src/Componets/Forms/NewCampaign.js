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

    this.props.createCampaign(this.state.newCampaign).then(campaign=>
      this.props.history.push(`/campaign/${campaign.id}`)

      )

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
    // console.log("props", this.props);
    // console.log(this.state.newCampaign);
    

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
            type="number"
            placeholder="Funding Goal"
            value={this.state.newCampaign.funding_goal}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps =(state)=>({
//   newCamp: state.campaigns.newCamp
// })

export default connect(
  null,
  { createCampaign }
)(NewCampaign);

import React, { Component } from "react";
import { connect } from "react-redux";
import { createCampaign } from "../../Actions/campaignsActions";
import '../../CssContainer/createCampaign.css'

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

if(this.props.user){

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
}else{
 this.setState({
   error:"MUST BE LONGGED IN"
 })
}
 
  };
  render() {
    // console.log("props", this.props);
    // console.log(this.state.newCampaign);
    

    return (
      <div className="create-bg">
        {this.state.error? <p style={{color:"red"}}>
          MUST BE LOGGED IN TO CREATE
        </p> : null}
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            onChange={e => this.handleChange(e)}
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.newCampaign.title}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="location"
            type="text"
            placeholder="Location"
            value={this.state.newCampaign.location}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="category"
            type="text"
            placeholder="Category"
            value={this.state.newCampaign.category}
          />
          <input
            onChange={e => this.handleChange(e)}
            name="funding_goal"
            type="number"
            placeholder="Funding Goal"
            value={this.state.newCampaign.funding_goal}
          />
          <textarea
            onChange={e => this.handleChange(e)}
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.newCampaign.description}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps =(state)=>({
  user: state.user.currentUser
})

export default connect(
  mapStateToProps,
  { createCampaign }
)(NewCampaign);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../CssContainer/CurrentUserCampaignCard.css";
import { editCampaignId, deleteCampaign } from "../Actions/campaignsActions";

class CurrentUserCampaignCard extends Component {
  deleteCampaign = e => {
    console.log("here");
    this.props.deleteCampaign(this.props.campaign.id);
  };

  render() {
    return (
      <div className="current-campaigns-box">
        <div>
          <img
            src="https://source.unsplash.com/user/markusspiske/150x175"
            alt={this.props.campaign.id}
          />
        </div>
        Category: {this.props.campaign.category}
        <br />
        Title: {this.props.campaign.title} <br />
        Description:
        {this.props.campaign.description.substring(0, 90)}
        <br />
        featured: {this.props.campaign.featured ? <>yes</> : <> no </>}
        <br />
        <div>
          Funded: {this.props.campaign.amount_funded}
          <br />
          Goal: {this.props.campaign.funding_goal}
          <br />
          FullyFunded?: {this.props.campaign.goal_achieved ? <>yes</> : <>no</>}
          <br />
        </div>
        <div>
          <Link
            to={`/MyAccount/campaigns/edit/${this.props.campaign.id}`}
            onClick={() => {
              this.props.editCampaignId(this.props.campaign.id);
            }}
          >
            <button>Update</button>
          </Link>

          <button onClick={e => this.deleteCampaign(e)}>Delete</button>
          <Link to={`/campaign/${this.props.campaign.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { editCampaignId, deleteCampaign }
)(CurrentUserCampaignCard);

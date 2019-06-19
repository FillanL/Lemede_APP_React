import React, { Component } from "react";
import { connect } from "react-redux";


// import {makeCampaignFeatured} from '../Actions/authUserActions'
import CurrentUserCampaignCard from "./CurrentUserCampaignCard";

class UserCampaigns extends Component {
  render() {
    console.log(this.props);
    return (
      <>{this.props.currentUserCampaigns.length === 0 ? 
        <p>
          YOU HAVE NOT CREATED A CAMPAIGN YET.
        </p>
        :null
      }
        {this.props.currentUserCampaigns ? (
          <div>
            {this.props.currentUserCampaigns.map(campaign => (
              <CurrentUserCampaignCard
                key={campaign.id}
                campaign={campaign}
              />
            ))}
          </div>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => ({
  currentUserCampaigns: state.campaigns.campaigns.filter(
    camp => camp.creator.id === state.user.currentUser.id
  )
});
export default connect(mapStateToProps)(UserCampaigns);

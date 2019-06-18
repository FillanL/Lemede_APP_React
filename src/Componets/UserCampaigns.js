import React, { Component } from "react";
import { connect } from "react-redux";

import CurrentUserCampaignCard from "./CurrentUserCampaignCard";

class UserCampaigns extends Component {
  render() {
    console.log(this.props);
    return (
      <>
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

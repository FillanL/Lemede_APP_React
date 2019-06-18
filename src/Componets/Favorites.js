import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CurrentUserCampaignCard from "../Componets/CurrentUserCampaignCard";

class Favorites extends Component {
  render() {
    console.log("here");
    // debugger;
    console.log(this.props)
    return (
      <>
        {this.props.favorites != null && this.props.campaigns.length > 0
          ? this.props.favorites.favorite_lists
              .map(fav => {
                
                return this.props.campaigns.find(camp => fav.campaign_id);
              })
              .map(
                favorite => {
                    return <CurrentUserCampaignCard campaign={favorite} />}
                // console.log(favorite)
              )
          : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return {
    campaigns: state.campaigns.campaigns,
    favorites: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Favorites);

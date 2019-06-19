import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import CurrentUserCampaignCard from "../Componets/CurrentUserCampaignCard";

class Favorites extends Component {
  render() {
   
    return (
      <>
        {
      
          this.props.favorites != null && this.props.campaigns.length > 0
          ? this.props.favorites.favorite_lists.length === 0 ?
          <p>YOU HAVE NOT FAVORITED ANY CAMPAIGNS YET.</p>
          :
          this.props.favorites.favorite_lists
              .map(fav => {
                return this.props.campaigns.find(camp =>{ return camp.id === fav.campaign_id
                });
              })
              .map(
                favorite => {
                    return <CurrentUserCampaignCard 
                    key={favorite.id} campaign={favorite} />}
              )
          : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaigns: state.campaigns.campaigns,
    favorites: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Favorites);

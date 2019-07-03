import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from'react-router-dom'

import { handleProfileClicked } from "../Actions/getActions";
import '../CssContainer/ProfilePage.css'

class ProfilePage extends Component {
  componentDidMount() {
    this.props.handleProfileClicked(Number(this.props.match.params.id));

    console.log("mount", this.props.viewProfile);
  }
  vistingUser = () => {
    return this.props.user.find(user => user.id === this.props.viewProfile);
  };

  campCollabed = () => {
    const ids = [];
    const campNames = [];
    this.vistingUser().campaign_collaborators.map(camp =>
      ids.push(camp.campaign_id)
    );

    this.props.campaigns.filter(campaign => {
      return ids.includes(campaign.id)
    }).map(matchingCamps=>{
      return campNames.push(matchingCamps);
    });
    return campNames;
  };

  render() {
    console.log("rendinere", this.props.viewProfile);

    return (
      <>
        {this.props.user && this.props.viewProfile ? (
          <div>
            <div className="back-ground">

            </div>
            <div className="profile-pic">
              <img
                src={this.vistingUser().user_img}
                alt={this.vistingUser().first_name}
              />
            </div>
            <div className="user-info">

            <span className="profile-username">
            {this.vistingUser().username.toUpperCase()}
            </span>
            {", "}{this.vistingUser().profession.toUpperCase()}
           
            
            <h4>{this.vistingUser().location}</h4>
            <p className="bio"> Bio: </p>
            <article>
            {this.vistingUser().bio}
            </article>
            </div>
            {this.campCollabed().length > 0 ?
            <>
             <h3>collaborated on :</h3>
            <div className="collab_campaigns_container">
              {this.campCollabed().map(collabCampaign => (
                <Link 
                key={collabCampaign.id}
                to={`/campaign/${collabCampaign.id}`}
                >
                  <div className="collab_campaigns">

                <img alt={collabCampaign.title} srcSet={collabCampaign.campaign_img} />
                <p key={collabCampaign.id}> {collabCampaign.title}</p>
                  </div>
                </Link>
              ))}
            </div>
            </>
            :<h3>no collaborations yet</h3>}
          </div>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("got stsate", state.user.viewProfile);

  return {
    user: state.user.allUsers,
    // .find(user => user.id === state.user.viewProfile),
    viewProfile: state.user.viewProfile,
    campaigns: state.campaigns.campaigns
  };
};
export default connect(
  mapStateToProps,
  { handleProfileClicked }
)(ProfilePage);

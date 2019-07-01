import React, { Component } from "react";
import { connect } from "react-redux";

import { handleProfileClicked } from "../Actions/getActions";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.handleProfileClicked(Number(this.props.match.params.id));

    console.log("mount", this.props.viewProfile);
  }
  vistingUser = () => {
    return this.props.user.find(user => user.id === this.props.viewProfile);
  };

  campCollabed=()=>{
      const ids = []
      const campNames = []
    this.vistingUser().campaign_collaborators.map(camp=> ids.push(camp.campaign_id))
    
    this.props.campaigns.map(campaign=>{
                    
        if (ids.includes(campaign.id)){
            campNames.push(campaign)
        }
    }
    )
    return campNames
    
    
  }

  render() {
    console.log("rendinere", this.props.viewProfile);

    return (
      <>
        {this.props.user && this.props.viewProfile ? (
          <div>
            {this.vistingUser().username}
            {console.log(this.vistingUser())}
            hello
            {/* <p>{this.props.user.username}</p> */}
            <p>{this.vistingUser().first_name}</p>
            <p>{this.vistingUser().last_name}</p>
            <p>bio: {this.vistingUser().bio}</p>
            <p>location: {this.vistingUser().location}</p>
            <p>profession: {this.vistingUser().profession}</p>
            <div>
            collaborated on :{" "}
              {
                this.campCollabed().map(collabCampaign=> <p key={collabCampaign.id}> {collabCampaign.title}</p>)
              }
            </div>
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

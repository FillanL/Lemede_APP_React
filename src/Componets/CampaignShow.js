import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectCampaign, favoriteCampaign } from "../Actions/campaignsActions";
import { donationToCampaign } from "../Actions/authUserActions";
import {handleProfileClicked} from '../Actions/getActions'
import "../CssContainer/Campaign-show.css";

class CampaignShow extends Component {

  state = {
    donateValue: "",
    error: false
  };
  handleFav = () => {

    if (this.props.user) {
      // favorite
      this.props.favoriteCampaign(
        this.props.user.id,
        this.props.match.params.id
      );
    } else {
      this.setState({
        ...this.state,
        error: true,
        errorMessage: "Please Log In to Favorite"
      });
    }
  };

  handInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleDonationSubmit = e => {
    e.preventDefault();
// console.log("here");
// debugger

    if (
      this.props.user &&
      this.props.user.account_balance - this.state.donateValue < 0
    ) {
      this.setState({
        ...this.state,
        error: true,
        errorMessage: "Insufficient Funds"
      });
    } else if (!this.props.user) {
      this.setState({
        ...this.state,
        error: true,
        errorMessage: "Must log in to Donate"
      });
    } else {
      // back this project
      this.props.donationToCampaign(
        this.state.donateValue,
        this.props.user.id,
        this.props.campaign.id
      );
      this.props.selectCampaign(Number(this.props.match.params.id));

      this.setState({
        error: false,
        donateValue: ""
      });
    }
  };
  componentDidMount() {
    //   on refresh componenet still knows which campaign was selected
    this.props.selectCampaign(Number(this.props.match.params.id));

    console.log("mount",this.props.selectedCampaign);
    
  }

  render() {
    console.log("rendinere",this.state);
    
    return (
      <div>
        {this.props.campaign ? (
          <div>
            <div className="card-img" style={{ height: "400px" }}>
              <img style={{objectFit: "cover", objectPosition:"center center"}}
                src={this.props.campaign.campaign_img}
                alt={this.props.campaign.id}
              />
            </div>

            <div className="show-campaign-container">
              <div className="show-content">
                <h1>{this.props.campaign.title}</h1>
                  <h3 style={{color: "#465561"}}>{this.props.campaign.category}</h3>
                {this.props.user ? (
                  !(this.props.campaign.creator.id === this.props.user.id) ? (
                    <button onClick={() => this.handleFav()}>Favorite</button>
                  ) : null
                ) : (
                  <button onClick={() => this.handleFav()}>Favorite</button>
                )
                }
                <p>Location: {this.props.campaign.location}</p>
               
      
                <br></br>
                <article>
                  {this.props.campaign.description}
                  <br />
                  <br />
                  by:{" "}
                  <Link onClick={()=>this.props.handleProfileClicked(this.props.campaign.creator.id)} to={`/profile/${this.props.campaign.creator.id}`}
                  style={{color:"lightblue"}}>
                    {this.props.campaign.creator.username}
                  </Link> 
                </article>
              </div>
              <div className="right-container">
                <div className="donation-box">
                  <form onSubmit={e => this.handleDonationSubmit(e)}>
                    <h3>Donate</h3>
                    {this.state.error ? (
                  <div>
                    <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
                  </div>
                ) : null}
                    <input
                      type="number"
                      min="1"
                      onChange={e => this.handInputChange(e)}
                      // onInput="validity.valid||(value='')"
                      name="donateValue"
                      placeholder="$10"
                      value={this.state.donateValue}
                    />
                    <button>Donate</button>

                    {this.props.user &&
                      (this.props.campaign.creator.id === this.props.user.id ? (
                        <Link
                          to={`/MyAccount/campaigns/edit/${
                            this.props.campaign.id
                          }`}
                        >
                          <button>Update</button>
                        </Link>
                      ) : null)}
                  </form>
                </div>

                <div className="stats">
                  <h3>Stats</h3>
                  <p>
                  Donated: ${this.props.campaign.amount_funded.toLocaleString()}
                </p>
                <p>
                  Goal: ${this.props.campaign.funding_goal.toLocaleString()}
                </p>
                <p>Donations: {this.props.campaign.funded_campaigns.length}</p>
                <p>Backers:</p>
                <p>Percentage to Goal: {(
              (this.props.campaign.amount_funded /
                this.props.campaign.funding_goal) *
              100
            ).toFixed(2)}
            %</p>
                
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
console.log("got stsate",state.campaigns.selectedCampaign);

  return {
    campaign: state.campaigns.campaigns.find(
      campaign => campaign.id === state.campaigns.selectedCampaign
    ),
    user: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  { selectCampaign, donationToCampaign, favoriteCampaign, handleProfileClicked }
)(CampaignShow);

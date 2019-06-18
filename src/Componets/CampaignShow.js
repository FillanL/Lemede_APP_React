import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

import { selectCampaign, favoriteCampaign } from "../Actions/campaignsActions";
import { donationToCampaign } from "../Actions/authUserActions";
class CampaignShow extends Component {
  // //    match a fetch request for each show page
  //     componentDidMount() {
  //         // campaignInfo = () => {
  //           fetch(`http://localhost:3000/api/v1${this.props.match.url}`)
  //             .then(r => r.json())
  //             .then(campaign => {
  //               this.setState({
  //                 campaign
  //               });
  //             });
  //         // };
  //     // this.campaignInfo();
  //   }

  state = {
    donateValue: "",
    error: false
  };
  handleFav=()=>{
    console.log("here");

    if(this.props.user ){
      // favorite
      this.props.favoriteCampaign(this.props.user.id,this.props.match.params.id)
    }else{
      this.setState({
        ...this.state,
        error: true,
        errorMessage: "Please Log In to Favorite"
      })
    }
  }

  handInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleDonationSubmit = e => {
    e.preventDefault();

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
      this.props.selectCampaign(Number(this.props.match.params.id))
      
      this.setState({
        error: false,
        donateValue: ""
      });
    }
  };
  componentDidMount() {
    //   on refresh componenet still knows which campaign was selected
    this.props.selectCampaign(Number(this.props.match.params.id));

    // console.log("ehre", this.props);
    
  }

  render() {
    // console.log(this.props.user);
    // console.log(this.state.error);

    return (
      <div>
        {this.props.campaign &&(
          <div>
            <div className="card-img" style={{ height: "400px" }}>
              <img
                src="https://source.unsplash.com/user/markusspiske"
                alt={this.props.campaign.id}
              />
            </div>
            <h1>{this.props.campaign.title}</h1>
            <button onClick={()=>this.handleFav()}>Favorite</button>
            <p>Location:{this.props.campaign.location}</p>
            <p>
              Donated: ${this.props.campaign.amount_funded.toLocaleString()}
            </p>
            <p>Goal: ${this.props.campaign.funding_goal.toLocaleString()}</p>
            <article>
              {this.props.campaign.description}
              <br />
              <br />
              by: {this.props.campaign.creator.first_name}{" "}
              {this.props.campaign.creator.last_name}
            </article>
            <p>Donations: {this.props.campaign.funded_campaigns.length}</p>
            <p>Backers:</p>
            {this.state.error ? (
              <div>
                {" "}
                <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
              </div>
            ) : null}
            <div className="donation-box">
              <form onSubmit={e => this.handleDonationSubmit(e)}>
                <input
                  type="number"
                  min="1"
                  onChange={e => this.handInputChange(e)}
                  // onInput="validity.valid||(value='')"
                  name="donateValue"
                  placeholder="$10"
                  value={this.state.donateValue}
                />
                <button>Submit</button>

                {this.props.user &&(

                  
                    this.props.campaign.creator.id === this.props.user.id? 
                  <Link to={`/MyAccount/campaigns/edit/${this.props.campaign.id}` }>
                  <button >update</button>
                  </Link>
                  : null
                  
                  )}

              </form>
            </div>
            <div className="callab-box">box 1 b2</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("mapstate toprops", state)
  return {
    campaign: state.campaigns.campaigns.find(
      campaign => campaign.id === state.campaigns.selectedCampaign
    ),
    user: state.user.currentUser
  };

};

export default connect(
  mapStateToProps,
  { selectCampaign, donationToCampaign, favoriteCampaign }
)(CampaignShow);

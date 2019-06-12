import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCampaign } from "../Actions/campaignsActions";

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

  componentDidMount() {
    //   on refresh componenet still knows which campaign was selected
    this.props.selectCampaign(Number(this.props.match.params.id));
  }
  render() {
      
    return (
      <div>
        {this.props.campaign && (
          <div>
              <div className="card-img">
              <img
            src="https://source.unsplash.com/user/markusspiske"
            alt={this.props.campaign.id}/>
              </div>
            <h1>{this.props.campaign.title}</h1>
            <p>Location:{this.props.campaign.location}</p>
            <p>${this.props.campaign.amount_funded.toLocaleString()}</p>
            <p>${this.props.campaign.funding_goal.toLocaleString()}</p>
            <article>
              {this.props.campaign.description}
              <br />
              <br />
              by: {this.props.campaign.creator.first_name} {  this.props.campaign.creator.last_name}
            </article>
            <p>Backers: {this.props.campaign.funded_campaigns.length}
            </p>
            <div className="donation-box">
                <form>

              <input
                type="number"
                min="1"
                // onInput="validity.valid||(value='')"
                placeholder="$10"
              />
              <button>Sumbit</button>

                </form>
            </div>
            <div className="callab-box">
                box 1
                b2

            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
 
  return {
    campaign: state.campaigns.campaigns.find(
      campaign => campaign.id === state.campaigns.selectedCampaign
    )
  };
};

export default connect(
  mapStateToProps,
  { selectCampaign }
)(CampaignShow);

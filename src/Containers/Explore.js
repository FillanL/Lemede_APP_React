import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCampaign, selectCampaign } from "../Actions/campaignsActions";
import CampaignCard from "../Componets/CampaignCard";
import "../CssContainer/explore.css";

const NUM_OF_SHOWN_CAMPAIGNS = 12;
class Explore extends Component {

  pagiation = () => {
    let pages = [];
    let startNum = 1;
    const numOfPages = Math.ceil(
      this.props.campaigns.length / NUM_OF_SHOWN_CAMPAIGNS
    );
    while (startNum <= numOfPages) {
      pages.push(startNum);
      startNum++;
    }
    return pages;
  };


  render() {
    const startingVal = (Number(this.props.match.params.id)-1)*NUM_OF_SHOWN_CAMPAIGNS
    
    const endingVal = startingVal + NUM_OF_SHOWN_CAMPAIGNS

    const {campaigns} = this.props
    return (
      <div>
        <div className="search-bar-container">

        <input maxLength="40" type="text" placeholder="Search" />
        </div>
        <h2>Explore</h2>
        <div className="griddy">
          {campaigns
            .slice(startingVal, endingVal)
            .map(campaign => (
              <Link
                onClick={() => this.props.selectCampaign(campaign.id)}
                key={campaign.id}
                to={`/campaign/${campaign.id}`}
              >
                <CampaignCard key={campaign.id} campaign={campaign} />
              </Link>
            ))}
        </div>
        <div className="pages">
          {this.pagiation().map(num => (
            <Link
              key={num}
              to={`/Explore/${num}`}
            >
              {num}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  campaigns: state.campaigns.campaigns
});

export default connect(
  mapStateToProps,
  { fetchCampaign, selectCampaign }
)(Explore);

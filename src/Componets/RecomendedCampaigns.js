import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CampaignCard from "./CampaignCard";

class RecomendedCampaigns extends Component {
  randomNum = all => {
    console.log(this.props.RandCampaigns);

    let i = 0;
    let uniqRandom = [];
    let artCount = all.length;

  if (artCount > 8) {
      while (i < 8) {
        let jnum = Math.floor(Math.random() * artCount) + 1;

        if (uniqRandom.includes(jnum) === false) {
          uniqRandom.push(jnum);
          i++;
        }
      }
      return all.filter(campaign => uniqRandom.includes(campaign.id));
      // return uniqRandom
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div>
        <h2>Recomended Campaigns</h2>
        {this.props.RandCampaigns ? (
          <>
            
              {console.log("here", this.randomNum(this.props.RandCampaigns).map(ca => ca.id))}
            

            {/* {this.randomNum(this.props.RandCampaigns).map(campaign =>
              console.log(campaign)(
                <Link
                  onClick={() => this.props.selectCampaign(campaign.id)}
                  key={campaign.id}
                  to={`/campaign/${campaign.id}`}
                >
                  <CampaignCard key={campaign.id} campaign={campaign} />
                </Link>
              )
            )} */}
          </>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  RandCampaigns: state.campaigns.campaigns
  // .filter(
  //   campaign => (campaign.id === (13,12)))
});
export default connect(mapStateToProps)(RecomendedCampaigns);

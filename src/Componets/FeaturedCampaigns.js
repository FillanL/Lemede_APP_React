import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { selectCampaign } from "../Actions/campaignsActions";
import "../CssContainer/featuredCampaign.css";
import CampaignCard from "./CampaignCard";

const NUM_OF_SHOWN_CAMPAIGNS = 3
class FeaturedCampaigns extends Component {
  render() {
   
    
    return (
      <>
        <h2>Featured Campaigns</h2>     
        <div className="feat">
          <button>

        <FontAwesomeIcon icon={faAngleLeft} size="7x" />
          </button>
          {this.props.featuredCampaigns.slice(0,NUM_OF_SHOWN_CAMPAIGNS).map(campaign =>
              <Link
                onClick={()=>this.props.selectCampaign(campaign.id)}
                key={campaign.id}
                to={`/campaign/${campaign.id}`}
              >
                <CampaignCard key={campaign.id} campaign={campaign} />
              </Link>
          )}
           <button>

<FontAwesomeIcon icon={faAngleRight} size="7x" />
  </button>

        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  featuredCampaigns: state.campaigns.campaigns.filter(campaign => campaign.featured)
});
export default connect(mapStateToProps, {selectCampaign})(FeaturedCampaigns );

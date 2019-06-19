import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../CssContainer/CurrentUserCampaignCard.css";
import{makeCampaignFeatured} from '../Actions/authUserActions'
import { editCampaignId, deleteCampaign } from "../Actions/campaignsActions";

class CurrentUserCampaignCard extends Component {
  deleteCampaign = e => {
    this.props.deleteCampaign(this.props.campaign.id);
  };

  makefeatured=()=>{
    let confirm = window.confirm("this will cost $100")

    if(confirm && ((this.props.user.account_balance - 100 ) >= 0 ) && !this.props.campaign.featured){
      // fetch then up date wallet
        this.props.makeCampaignFeatured(this.props.user.id, this.props.campaign.id)
    } else if((this.props.user.account_balance - 100 ) < 0 ){

      alert("not enoguht")
      // this.setState({
      //   error: "not enought funds"
      // })
    } else if (this.props.campaign.featured){
      alert("Already Featured")
      // this.setState({
      //   error: "Already featured"
      // })
    }
  }

  render() {

    return (
      <>
      { 
        this.props.campaign.creator.id === this.props.user.id ?

      <div className="current-campaigns-box">
        <div>
          <img
            src="https://source.unsplash.com/user/markusspiske/150x175"
            alt={this.props.campaign.id}
          />
        </div>
        Category: {this.props.campaign.category}
        <br />
        Title: {this.props.campaign.title} <br />
        Description:
        {this.props.campaign.description.substring(0, 90)}
        <br />
        featured: {this.props.campaign.featured ? <>yes</> : <> no </>}
        <br />
        <div>
          Funded: {this.props.campaign.amount_funded}
          <br />
          Goal: {this.props.campaign.funding_goal}
          <br />
          FullyFunded?: {this.props.campaign.goal_achieved ? <>yes</> : <>no</>}
          <br />
        </div>
        <div>
          <Link
            to={`/MyAccount/campaigns/edit/${this.props.campaign.id}`}
            onClick={() => {
              this.props.editCampaignId(this.props.campaign.id);
            }}
          >
            <button>Update</button>
          </Link>
            <button onClick={()=>this.makefeatured()}>Feature</button>
          

          <button onClick={e => this.deleteCampaign(e)}>Delete</button>
          <Link to={`/campaign/${this.props.campaign.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
      :
      this.props.campaign ?
      <div className="favorite-campaigns-box">
        <div>
          <img
            src="https://source.unsplash.com/user/markusspiske/150x175"
            alt={this.props.campaign.id}
          />
        </div>
        Category: {this.props.campaign.category}
        <br />
        Title: {this.props.campaign.title} <br />
        Description:
        {this.props.campaign.description.substring(0, 90)}...
        <br />
        <br />
        Goal: ${this.props.campaign.funding_goal.toLocaleString()}
      
        
        <div>
          <Link to={`/campaign/${this.props.campaign.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
      : null
      }
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log("state", state);
  return {
    user: state.user.currentUser
  };
};

export default connect(
  mapStateToProps,
  { editCampaignId, deleteCampaign, makeCampaignFeatured }
)(CurrentUserCampaignCard);

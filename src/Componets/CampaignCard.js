import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../CssContainer/CampaignCard.css";
import ProgressBar from "./ProgressBar";

class CampaignCard extends Component {
  render() {
    const { amount_funded, funding_goal } = this.props.campaign;

    return (
      <div className="card">
        <div className="card-img">
          <img
            src="https://source.unsplash.com/user/markusspiske"
            alt={this.props.campaign.id}
          />
        </div>
        {((amount_funded / funding_goal) * 100).toFixed(2) <= 0 ? (
          <div className="new-campaign">
            <h4> New Campaign</h4>
          </div>
        ) : (
          <div className="progress-bar-wrapper">
            <ProgressBar
              precentage={
                ((amount_funded / funding_goal) * 100).toFixed(2) + "%"
              }
              int={((amount_funded / funding_goal) * 100).toFixed(2)}
            />
          </div>
        )}

        <div className="card-content">
          <h4>{this.props.campaign.title}</h4>
          <article>
            {this.props.campaign.description.substring(0, 90)}...
          </article>

          <p>Goal: ${this.props.campaign.funding_goal.toLocaleString()}</p>
          <p>funded: ${this.props.campaign.amount_funded.toLocaleString()}</p>
          <p>
            percentage:{" "}
            {(
              (this.props.campaign.amount_funded /
                this.props.campaign.funding_goal) *
              100
            ).toFixed(2)}
            %
          </p>
        </div>
        {/*
                <p>
                     <Link>{this.props.campaign.creator.first_name} { this.props.campaign.creator.last_name } 
                
                    </Link></p>

               <Link to='/crampaign_show'>show page</Link>  
                */}
      </div>
    );
  }
}
export default CampaignCard;

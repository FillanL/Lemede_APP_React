import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CssContainer/CampaignCard.css'
import ProgressBar from './ProgressBar'

class CampaignCard extends Component {
    render() {

        const {amount_funded,funding_goal}= this.props.campaign

        return (
            
            <div className="card">
                <h4>
                    {this.props.campaign.title}
                </h4>
                <article>
                    {this.props.campaign.description}
                </article>
                <ProgressBar 
                    precentage={
                        (amount_funded / funding_goal*100).toFixed(2) + '%'
                    } 
                    int={(amount_funded / funding_goal*100).toFixed(2)}
                />

                <p>Goal: ${this.props.campaign.funding_goal.toLocaleString()}</p>
                <p>funded: ${this.props.campaign.amount_funded.toLocaleString()}</p>
                <p>percentage: {(this.props.campaign.amount_funded / this.props.campaign.funding_goal*100).toFixed(2)}%</p>
                <p><Link>{this.props.campaign.creator.first_name} { this.props.campaign.creator.last_name }</Link></p>
                <Link to='/campaign_show'>show page</Link>
                
            </div>
        )
    }
}
export default CampaignCard

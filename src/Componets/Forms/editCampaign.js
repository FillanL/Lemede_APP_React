import React, { Component } from "react";
import { connect } from "react-redux";
// import {Link} from 'react-router-dom'
import { editCampaignId, updateCampaign } from "../../Actions/campaignsActions";
import '../../CssContainer/editCamp.css'
import EditorJs from 'react-editor-js';

class editCampaign extends Component {
  state = {
    editValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      funding_goal: ""
    }
  };
  componentDidMount() {
    this.props.editCampaignId(Number(this.props.match.params.id));
  }

  handleInputClick = e => {
    if (e.target.value === "") {
      this.setState({
          editValues: {
          ...this.state.editValues,
         [e.target.name]: this.props.campaign[`${e.target.name}`] }
      });
    }
  };

  handleEditChange = e => {
    //   if(e.target.value === ""){

    //       this.setState({
    //           editValues: {
    //               ...this.state.editValues,
    //           [e.target.name]: this.props.campaign[`${e.target.name}`]
    //         }
    //       })
    //   }else{
        this.setState({
            editValues: {
                ...this.state.editValues,
            [e.target.name]: e.target.value
          }
        })
    //   }
  };
  handleSubmitEdit = e => {
    e.preventDefault();
// console.log("here");

    this.props.updateCampaign(this.state.editValues, this.props.campaign.id)

    
    this.setState= ({
        editValues: {
            title: "",
            description: "",
            category: "",
            location: "",
            funding_goal: ""
        }
    });
    this.props.history.push(`/campaign/${this.props.campaign.id}`)
  };

  render() {
    const { campaign } = this.props;
    //   console.log("props",this.props.campaign);
    // console.log("state", this.props);

    return (
      <>
        {campaign ? (
          <div className="edit-campaign">
            {/* edit editCampaign */}
            <form onSubmit={e => this.handleSubmitEdit(e)}>
              <input
                onClick={e => this.handleInputClick(e)}
                onChange={e => this.handleEditChange(e)}
                name="title"
                type="text"
                placeholder={this.props.campaign.title}
                value={this.state.editValues.title}
              />
              <input
                onClick={e => this.handleInputClick(e)}
                onChange={e => this.handleEditChange(e)}
                name="location"
                type="text"
                placeholder={this.props.campaign.location}
                value={this.state.editValues.location}
              />
              <input
                onClick={e => this.handleInputClick(e)}
                onChange={e => this.handleEditChange(e)}
                name="category"
                type="text"
                placeholder={this.props.campaign.category}
                value={this.state.editValues.category}
              />

              {/* only show 24 hours after cmapaign is created */}
              <input
                onClick={e => this.handleInputClick(e)}
                onChange={e => this.handleEditChange(e)}
                name="funding_goal"
                type="number"
                placeholder={this.props.campaign.funding_goal}
                value={this.state.editValues.funding_goal}
              />
              <textarea
                onClick={e => this.handleInputClick(e)}
                onChange={e => this.handleEditChange(e)}
                name="description"
                type="text"
                placeholder={this.props.campaign.description}
                value={this.state.editValues.description}
              />
              {/* herre */}
              <EditorJs data={{
              type: "paragraph",
              data: {
                text:
                  "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            }} />;
              <button type="submit">Edit</button>
            </form>
          </div>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => ({
  campaign: state.campaigns.campaigns.find(
    campaign => campaign.id === state.campaigns.editingCampaignId
  ),
  campaignId: state.campaigns.editingCampaignId
});
export default connect(
  mapStateToProps,
  { editCampaignId, updateCampaign }
)(editCampaign);

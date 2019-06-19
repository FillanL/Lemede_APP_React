import React, { Component } from 'react'
import {connect} from 'react-redux'
import AccountNav from '../Componets/AccountNav'
import UserCampaigns from '../Componets/UserCampaigns'
import Favorites from '../Componets/Favorites';
import EditUser from '../Componets/Forms/editUser'

class Account extends Component {
    state={
        page: "favorite"
    }

    handleUpdate=(event,e)=>{
        
        this.setState({
            page: e
        })
        console.log(event.target.classList.add("active"));
    }

    renderer= () =>{
        if (this.state.page === "favorite"){
            
            return (<Favorites />
                )
        }else if(this.state.page === "campaigns"){
            return (<UserCampaigns />
                )
        }else if(this.state.page === "edit"){
            return (
                <EditUser />
                )
    }}

    render() {
        return (
            <div>
                {this.props.currentUser&&

                <>
                <AccountNav page={this.handleUpdate} />
                
                {this.renderer()}

                </>
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Account)
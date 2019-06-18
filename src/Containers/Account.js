import React, { Component } from 'react'
import {connect} from 'react-redux'
import AccountNav from '../Componets/AccountNav'
import UserCampaigns from '../Componets/UserCampaigns'
import Favorites from '../Componets/Favorites';

class Account extends Component {
    render() {
        return (
            <div>
                {this.props.currentUser&&

                <>
                <AccountNav />
                <UserCampaigns />
                <Favorites />

                
                <div>

                </div>
                <p>
                {this.props.currentUser.username}
                </p>

                <button>Delete Account</button>
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
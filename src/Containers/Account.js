import React, { Component } from 'react'
import {connect} from 'react-redux'
import AccountNav from '../Componets/AccountNav'
import UserCampaigns from '../Componets/UserCampaigns'
import Favorites from '../Componets/Favorites';

class Account extends Component {
    state={
        page: "favorite"
    }

    handleUpdate=(e)=>{
        this.setState({
            page: e
        })
    }

    renderer= () =>{
        if (this.state.page === "favorite"){
            return (<Favorites />
                )
        }else if(this.state.page === "campaigns"){
            return (<UserCampaigns />
                )
        }
    }

    render() {
        return (
            <div>
                {this.props.currentUser&&

                <>
                <AccountNav page={this.handleUpdate} />
                
                {this.renderer()}
                
                
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
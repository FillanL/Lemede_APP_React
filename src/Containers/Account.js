import React, { Component } from 'react'
import {connect} from 'react-redux'
import AccountNav from '../Componets/AccountNav'

class Account extends Component {
    render() {
        return (
            <div>
                {this.props.currentUser&&

                <>
                <AccountNav />
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
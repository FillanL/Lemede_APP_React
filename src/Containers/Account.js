import React, { Component } from 'react'
import {connect} from 'react-redux'

class Account extends Component {
    render() {
        return (
            <div>
                {this.props.currentUser&&
                <>
                <div>
                    <ul>
                        <li> messages</li>
                        <li> Favorites</li>
                        <li>alerts</li>
                        <li>friends</li>
                        <li>my Campaigns</li>
                    </ul>

                </div>
                <p>
                {this.props.currentUser.username}
                </p>
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
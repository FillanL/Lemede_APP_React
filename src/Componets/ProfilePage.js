import React, { Component } from 'react'
import {connect} from 'react-redux'

class ProfilePage extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
const mapStateToProps = state =>{
   return{

       user: state.user.currentUser
   }

//    ) 
}
export default connect(mapStateToProps)(ProfilePage)
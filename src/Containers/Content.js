import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home'
import SignUp from '../Componets/Forms/SignUp'
import LogIn from '../Componets/Forms/LogIn'
import NewCampaign from '../Componets/Forms/NewCampaign'
import Explore from './Explore'

class Content extends Component {


    render() {
        return (
            <div>
                {/* <Home/> */}
                <Switch>
                    <Route exact path='/' component={Home}
                    />
                    <Route path='/SignUp' component={SignUp}
                    />
                     <Route path='/Explore' component={Explore}
                    />
                     <Route path='/LogIn' component={LogIn}
                    />
                    <Route path='/NewCampaign' component={NewCampaign}
                    />
                   
                </Switch>
            </div>
        )
    }
}
export default withRouter(Content);
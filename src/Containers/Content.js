import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home'
import SignUp from '../Componets/Forms/SignUp'
import LogIn from '../Componets/Forms/LogIn'
import NewCampaign from '../Componets/Forms/NewCampaign'
import Explore from './Explore'
import CampaignShow from '../Componets/CampaignShow';
import Account from '../Containers/Account'
import IncreaseBalance from '../Componets/IncreaseBalance'
import UserCampaigns from '../Componets/UserCampaigns'
import editUser from '../Componets/Forms/editUser'
import editCampaign from '../Componets/Forms/editCampaign'
import '../CssContainer/Content.css'

class Content extends Component {


    render() {
        return (
            <div className="content-wrapper">
                
                <Switch>
                    <Route exact path='/' component={Home}
                    />
                    <Route path='/SignUp' component={SignUp}
                    />
                     <Route path='/Explore/:id' component={Explore}
                    />
                     <Route path='/LogIn' component={LogIn}
                    />
                    <Route path='/NewCampaign' component={NewCampaign}
                    />
                    <Route path='/campaign/:id' component={CampaignShow}
                    />
                    <Route exact path='/MyAccount' component={Account}
                    />
                    <Route path='/addBalance' component={IncreaseBalance}
                    />
                   <Route exact path='/MyAccount/campaigns' component={UserCampaigns}
                    />
                    <Route path='/MyAccount/edit' component={editUser}
                    />
                    <Route exact path='/MyAccount/campaigns/edit/:id' component={editCampaign}
                    />

                    
                </Switch>
            </div>
        )
    }
}
export default withRouter(Content);
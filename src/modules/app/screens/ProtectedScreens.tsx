import React from 'react';
import SettingScreen from "./settings"
import PaymentsScreen from "./payments"
import Dashboard from '../screens/dashboard';
import { Switch, Redirect, Route } from "react-router-dom"
import CampaignScreen from './campaign/campaignActivityN';
import Campaigns from "./campaigns"
import Donations from "./donations"
import { CampaignForm } from '../../../components/campaign/newCampaignForm';
import { _LoginHere } from '../../../screens/auth/signup';

export class ProtectedScreenIndex extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={["/", "/Dashboard"]} exact>
          <Dashboard />
        </Route>

        <Route path="/campaigns/:campaign" component={CampaignScreen}/>
        <Route path="/campaigns">
          <Campaigns />
        </Route>

        <Route path="/new-campaign">
          <CampaignForm />
        </Route>

        <Route path="/donations">
          <Donations />
        </Route>

        <Route path="/payments" exact>
          <PaymentsScreen />
        </Route>

        <Route path="/settings" exact>
          <SettingScreen />
        </Route>
      </Switch>
    );
  }
}

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, Modal, Paper, Divider } from "@material-ui/core"
import { Tabs, Tab } from "@material-ui/core"
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { ConnectedCampaignLoader } from './campaign/campaignLoader';
import { useHistory } from 'react-router-dom';


function Campaign() {
 
  const [shouldCreate, setCreateCampaign] = useState<boolean>(false);

  const history = useHistory()
  return (
    <>
      <Container>
        <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: 16, alignContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" color="textPrimary">All Campaigns</Typography>
          <Button color="secondary" size="large" variant="contained"
            onClick={() => {
              history.replace("/new-campaign");
            }}>Create</Button>
        </div>
        <div>
          <Divider />
        </div>
        <ConnectedCampaignLoader />
      </Container>
    </>
  );
}

export default Campaign;




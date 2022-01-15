import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, Modal, Paper, Divider } from "@material-ui/core"
import { ConnectedDonationsLoader } from './donations/mydonations';


function Donations() {
  return (
    <>
      <Container>
        <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: 16, alignContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" color="textPrimary">My donations</Typography>
          <Button variant="outlined">Expore</Button>
        </div>
        <Divider />
        <ConnectedDonationsLoader />
      </Container>
    </>
  );
}

export default Donations;




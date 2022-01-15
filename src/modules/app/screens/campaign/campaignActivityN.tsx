import React from 'react';
import { RootAppState } from "../../../../redux/store"
import { Container, Grid, Typography, Divider, Tabs, Tab, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

export function CampaignScreen(props: {}) {
    
    let campaigns = useSelector((data: RootAppState) => {
        return data.campaignStore?.campaigns
    });

    const campaign = campaigns?.find(v => true);

    if (campaign == undefined) { return <div>/</div> }
    return <div>
        <Container>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Paper style={{ padding: 16 }}>
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                            Campaign Profile
                        </Typography>
                        <div>
                            <Typography>
                               <span>{campaign.title}</span>
                            </Typography>
                            <Typography style={{ marginTop:24 }}>
                              {campaign.description}
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>
                                <b>Funding Goal:</b>  {campaign.fundingGoal}NGN
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>
                                <b>Total Amount Raised:</b>  ----
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>
                                <b>Total Amount of each 20% Deduction: </b>  ----
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>
                                <b>Total Withdrawable Amount:</b> ----
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>
                                <b> Location: </b> Lagos, Nigeria
                            </Typography>
                            <Typography style={{ marginTop: 12 }}>  <b>Date: </b> {new Date(campaign?.createdAt ?? "1").toTimeString()}</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>;
}

export default CampaignScreen;
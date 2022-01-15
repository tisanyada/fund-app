import {
    createStyles, Grid, OutlinedInput, withStyles,
    WithStyles, TextField, Typography,
    Button, Divider, Paper, IconButton
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons"
import React from "react"
import { NewCampaign } from "../../core/interfaces/campaign";


import { createCampaignAction } from "../../redux/campaigns/actions"


const style = createStyles({
    verticalSpacing: {
        marginTop: 12, marginBottom: 12
    }
})

export interface ContentProps extends WithStyles<typeof style> {

}

export class _CampaignForm extends React.Component<ContentProps, { campaign: NewCampaign, file: File | undefined }> {

    constructor(props: ContentProps) {
        super(props)
        this.state = {
            file: undefined,
            campaign: {
                category: "category",
                country: "NG",
                description: "",
                title: "",
                startDate: Date.now().toString(),
                endDate: Date.now().toString(),
                videoUrl: "https://www.youtube.com/watch?v=k7icGTdC1Es",
                fundingGoal: "0"
            }
        }
    }

    render() {
        let classes = this.props.classes;
        let { campaign } = this.state;
        return (
            <Grid container spacing={2} alignContent="center" alignItems="center" justify="center">
                <Grid item xs={10} sm={8} md={7}>
                    <Paper style={{}} >
                        <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography>New campaign</Typography>
                            <div>
                                <Button variant="contained" color="primary" onClick={() => {
                                    console.log(this.state.campaign)
                                    createCampaignAction(this.state.campaign);
                                }}>Publish
                                </Button>
                            </div>
                        </div>

                        <Divider />

                        <div style={{}}>
                            <Grid container >
                                <Grid item style={{ padding: 16 }} xs={12}>
                                    <Typography>Basic Info</Typography>
                                    <Grid container>
                                        <Grid item xs={12}>

                                            <TextField label="title"
                                                size="small"
                                                fullWidth className={classes.verticalSpacing} variant="outlined"
                                                onChange={(v) => {
                                                    this.setState({ campaign: { ...campaign, title: v.target.value } })
                                                }} />

                                            <TextField label="Funding goal"
                                                size="small"
                                                value={campaign.fundingGoal}
                                                fullWidth className={classes.verticalSpacing}
                                                variant="outlined"
                                                type="number"
                                                onChange={(v) => {
                                                    this.setState({ campaign: { ...campaign, fundingGoal: v.target.value } })
                                                }} />

                                            <TextField label="description" fullWidth className={classes.verticalSpacing} variant="outlined"
                                                multiline rows={4}
                                                size="small"
                                                value={campaign.description}
                                                onChange={(v) => {
                                                    this.setState({ campaign: { ...campaign, description: v.target.value } })
                                                }} />


                                            <TextField label="Video link"
                                                size="small"
                                                value={campaign.videoUrl}
                                                fullWidth className={classes.verticalSpacing} variant="outlined"
                                                onChange={(v) => {
                                                    this.setState({ campaign: { ...campaign, videoUrl: v.target.value } })
                                                }} />
                                        </Grid>

                                        <Grid container className={classes.verticalSpacing} spacing={2}>
                                            <Grid item xs={6}>
                                                <Typography variant="caption">Starts</Typography>
                                                <TextField type="datetime-local" variant="outlined"
                                                    size="small"
                                                    onChange={v => {
                                                        this.setState({ campaign: { ...campaign, startDate: v.target.value } })
                                                    }}
                                                    fullWidth />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="caption">Ends</Typography>
                                                <TextField type="datetime-local" variant="outlined"
                                                    size="small"

                                                    onChange={v => {
                                                        this.setState({ campaign: { ...campaign, endDate: v.target.value } })
                                                    }}
                                                    fullWidth />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>


                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export const CampaignForm = withStyles(style)(_CampaignForm)
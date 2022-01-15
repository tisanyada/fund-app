import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, Paper } from "@material-ui/core"
import { Divider, TextField } from "@material-ui/core"
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { RootAppState } from '../../../redux/store';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      // maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },

    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    contentWrapper: {
      margin: '40px 16px',
    },
    secondaryBar: {
      zIndex: 0,
    },
  });

export interface ContentProps extends WithStyles<typeof styles> { }



function SettingsScreen(props: ContentProps) {
  const { classes } = props;
  const user = useSelector((v: RootAppState) => {
    return v.authStore?.auth
  });

  let [currentTab, updateTab] = useState<number>(0);

  return (
    <Container>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>Settings</Typography>
      <Grid container>
        <Grid item md={8} style={{ marginTop: 24 }}>
          <Paper style={{ padding: 16 }}>
            <TextField label="Fullname" fullWidth style={{ marginTop: 12 }} 
              value={user?.user?.fullname} />
            <TextField label="Email" fullWidth style={{ marginTop: 12 }}
              value={user?.user?.email} />
            <TextField label="Phone" fullWidth style={{ marginTop: 12 }} 
              value={user?.user?.phone} 
              variant="standard"/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(SettingsScreen);





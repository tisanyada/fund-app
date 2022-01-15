import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Container } from "@material-ui/core"
import { Tabs, Tab } from "@material-ui/core"
import { LinkSharp } from "@material-ui/icons"
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
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



function StoreScreen(props: ContentProps) {
  const { classes } = props;

  return (
    <Container>
      <Typography>Store</Typography>
    </Container>
  );
}

export default withStyles(styles)(StoreScreen);




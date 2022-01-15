import React from 'react';

import Typography from '@material-ui/core/Typography';

import { Container } from "@material-ui/core"

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



function PaymentsScreen(props: ContentProps) {
  const { classes } = props;
  return (
    <Container>
      <Typography>Payments</Typography>
    </Container>
  );
}

export default withStyles(styles)(PaymentsScreen);




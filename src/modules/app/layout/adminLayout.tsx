import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Header from './Header';
import { Switch, Redirect, Route } from "react-router-dom"
import { themeOverride } from '../../../components/theme/theme';
import { ProtectedScreenIndex } from '../screens/ProtectedScreens';

let theme = themeOverride;

const drawerWidth = 256;


const styles = createStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      // width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    },
  },
  main: {
    flex: 1,
    background: '#F9F9F9',
    padding: theme.spacing(3, 3),
  },
  footer: {
    padding: theme.spacing(2),
    background: 'white',
  },
});

export interface PaperbaseProps extends WithStyles<typeof styles> {

}

class AdminLayout extends React.Component<PaperbaseProps>{


  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState((state) => {
      return { mobileOpen: !this.state.mobileOpen };
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={this.handleDrawerToggle} />
          <main className={classes.main}>

            {/* Page area goes here */}
            <ProtectedScreenIndex />
          </main>
          <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://material-ui.com/">
                Savelives
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </footer>
        </div>
      </div>

    );
  }
}

export default withStyles(styles)(AdminLayout);
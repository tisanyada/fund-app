
import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CreditCard, Home, Settings, User, Compass, Info, Watch, List as ListFeather, LogOut, Check, } from "react-feather"
import { Typography, AppBar, Toolbar } from "@material-ui/core"
import { Omit } from '@material-ui/types';
import { Link } from "react-router-dom"
import { signoutUser } from '../../../redux/auth/actions';
const categories = [
  {
    id: 'Account',
    children: [
      { id: 'Dashboard', icon: <Home />, path: "/dashboard" },
      { id: 'Campaigns', icon: <ListFeather />, path: "/my-campaigns" },
      { id: 'Donations', icon: <Compass />, path: "/donations" },
      { id: 'Settings', icon: <Settings />, path: "/settings" },
    ],
  },
];



const styles = (theme: Theme) =>
  createStyles({
    categoryHeader: {
      padding: theme.spacing(1, 3)
    },
    categoryHeaderPrimary: {
      color: "grey"
    },
    item: {
      color: '#404040',
      textDecoration: "none",
      '&:hover,&:focus': {
        // backgroundColor: 'rgba(255, 255, 255, 0.08)',

      },
      padding: theme.spacing(2, 3)
    },
    itemCategory: {
      boxShadow: '0 -1px 0 #404854 inset',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    firebase: {
      fontSize: 24,
      // color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
      textDecoration: "none",
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
  });

export interface NavigatorProps extends Omit<DrawerProps, 'classes'>, WithStyles<typeof styles> { }

function Navigator(props: NavigatorProps) {
  const { classes, ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <AppBar color="transparent" position="relative" elevation={0}>
        <Toolbar className={classes.categoryHeader}></Toolbar>
      </AppBar>
      <List disablePadding>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <Link to={`\/${childId.toLowerCase()}`} style={{ textDecoration: "none" }}>

                <ListItem
                  key={childId}
                  button
                  className={clsx(classes.item)}
                >

                  <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                    }}
                    style={{ textDecorationLine: "none", textDecorationSkip: "none" }}
                  >

                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
            {/* <Divider className={classes.divider} /> */}
          </React.Fragment>
        ))}


        <Divider />
        <ListItem
          className={clsx(classes.item)}
          onClick={() => {
            signoutUser()
          }}
        >
          <ListItemIcon className={classes.itemIcon}><LogOut /></ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
            style={{ textDecorationLine: "none", textDecorationSkip: "none" }}
          >
            Logout
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigator);
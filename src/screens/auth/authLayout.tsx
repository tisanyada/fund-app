import React from 'react';
import { Button, Container, Typography, Paper, TextField, Grid, CircularProgress} from '@material-ui/core';
import {createStyles, withStyles, WithStyles} from "@material-ui/core/styles"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { RootAppState, AppStore } from "../../redux/store"
import firebase from 'firebase'
import {LoginAction} from "../../redux/auth/actions"
import { themeOverride } from '../../components/theme/theme';
// import "firebase/app"

export interface LayoutProps extends WithStyles<typeof styles> {
    
}

export class AuthLayout extends React.Component<LayoutProps> {
    
    render(){
        let classes= this.props.classes;
        return <div>
            <Grid container style={{background:'rgba(200,200,200,.5)', minHeight:"100vh"}}>
                <Grid item xs={12}>
                {this.props.children}
                </Grid>
            </Grid>
        </div>
    }
}

const theme =themeOverride;

const styles = createStyles({
   side:{
    // padding: theme.spacing(1),
    background:"orange",
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.dark,
      height: "100vh"
    }
   }
})


export default withStyles(styles)(AuthLayout) 
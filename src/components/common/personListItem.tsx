
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Container, Grid, IconButton, Divider, Avatar } from "@material-ui/core"
import { LinkSharp, Note, MoreVert } from "@material-ui/icons"


export function PersonListItem() {
    return <div>
        <div style={{ display: "flex", padding: 12, alignItems: 'center' }}>
            <Avatar />
            <div style={{ alignSelf: "center", width: "100%", marginLeft: 12, marginRight: 12 }}>
                <Typography variant="subtitle1" style={{padding:0, margin:0}}>First Name (Last name)</Typography>
                <Typography variant="caption">person@gmail.com</Typography>
            </div>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
        <Divider />
    </div>;
}
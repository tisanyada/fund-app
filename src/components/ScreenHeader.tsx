import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
    createStyles({
        secondaryBar: {
            zIndex: 0,
        },
        menuButton: {
            marginLeft: -theme.spacing(1),
        },
        iconButtonAvatar: {
            padding: 4,
        },
        link: {
            textDecoration: 'none',
            color: lightColor,
            '&:hover': {
                color: theme.palette.common.white,
            },
        },
        button: {
            borderColor: lightColor,
        },
    });

interface HeaderProps extends WithStyles<typeof styles> {
    onDrawerToggle: () => void;
    title:string;
}


function ScreenHeader(props: HeaderProps) {
    const { classes, onDrawerToggle } = props;

    return (
        <React.Fragment>
            <AppBar
                component="div"
                className={classes.secondaryBar}
                color="primary"
                position="static"
                elevation={0}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                Authentication
              </Typography>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                Web setup
              </Button>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Help">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

export default withStyles(styles)(ScreenHeader);
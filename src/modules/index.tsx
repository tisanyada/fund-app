import React from 'react';
import AdminLayout from "./app/layout/adminLayout"
import {
    createStyles,
    ThemeProvider,
    withStyles,
    Theme,
    WithStyles,
} from '@material-ui/core/styles';

import { Switch, Redirect, Route } from "react-router-dom"
import { themeOverride } from '../components/theme/theme';
import { connect, ConnectedProps } from 'react-redux'
import { RootAppState } from '../redux/store';
import { initUserAuth } from '../redux/auth/actions';

const mapState = (state: RootAppState) => ({
    isLoggedIn: state.authStore?.auth.user == null ? false : true,
    auth: state.authStore
});

const mapDispatch = () => ({
    load: () => {

    }
})


const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}


class AppRootLoader extends React.Component<Props> {

    componentDidMount(){
        initUserAuth()
    }

    render() {

        if (this.props.isLoggedIn == false) {
            return <Redirect to="/login" push />
        }

        return (
            <AdminLayout />
        );
    }
}

export default connector(AppRootLoader);
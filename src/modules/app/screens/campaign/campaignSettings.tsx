import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect, ConnectedProps } from 'react-redux';
import { Grid } from "@material-ui/core"
import { RootAppState } from "../../../../redux/store"
// import { CourseDetailsWritable } from '../../components/courseEditor/settings/basicDetails';
// import { CourseClassification } from '../../components/courseEditor/settings/contactInfo';
// import { CourseMetaData } from '../../components/courseEditor/settings/socialProfile';
const mapState = (state: RootAppState) => ({
    courses: state.campaignStore?.campaigns
})

const mapDispatch = () => ({

})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

class _Screen extends Component<Props> {

    state = {
        currentTab: 0
    }
    changeTab = (event: React.ChangeEvent<{}>, index: any) => {
        console.log(index)
        this.setState(state => {
            this.state.currentTab = index;

        })
    }
    componentDidMount() {

    }
    render() {
        return (<div>
            <Grid container spacing={2}>
           
            </Grid>
        </div>);
    }
}

export const CourseSettings = connector(_Screen);

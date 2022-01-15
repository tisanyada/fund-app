import React, { Component } from 'react';

import { Modal, IconButton, Divider, TableCell, TableContainer, Button } from "@material-ui/core"
import {
  Avatar, Table, TableRow, TableHead, TableFooter,
  TableBody, Grid, Paper
} from "@material-ui/core"
import { connect, ConnectedProps } from 'react-redux';
import { Link } from "react-router-dom"
import { loadCampaignAction } from '../../../../redux/campaigns/actions';
import { RootAppState } from '../../../../redux/store';

const mapState = (state: RootAppState) => ({
  campaigns: state.campaignStore?.campaigns ?? []
})

const mapDispatch = () => ({
  load: () => {

  }
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

class CourseLoader extends Component<Props> {
  componentDidMount() {
    loadCampaignAction()
  }

  render() {
    return (<div style={{}}>
      <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date created</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {this.props.campaigns?.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    10th jun
                  </TableCell>
                  <TableCell align="left">{row.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    pending
                  </TableCell>
                  <TableCell align="right">{row.fundingGoal}
                  </TableCell>
                  <TableCell align="right"><Button variant="outlined">
                    <Link to={`/campaigns/${row._id}`} style={{ textDecoration: 'none' }}>
                      Manage
                    </Link></Button>
                  </TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </div>
    );
  }
}

export const ConnectedCampaignLoader = connector(CourseLoader);

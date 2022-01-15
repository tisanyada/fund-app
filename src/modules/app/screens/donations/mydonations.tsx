import React, { Component } from 'react';

import { Modal, IconButton, Divider, TableCell, TableContainer, Button } from "@material-ui/core"
import {
  Avatar, Table, TableRow, TableHead, TableFooter,
  TableBody, Grid, Paper
} from "@material-ui/core"
import { connect, ConnectedProps } from 'react-redux';

import { Link } from "react-router-dom"
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

class MyDonationsLoader extends Component<Props> {

  componentDidUpdate() {
    console.log("updated")
  }

  render() {

    console.log("in render list")
    console.log(this.props.campaigns)
    return (<div style={{}}>

      <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>For</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell align="right">status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {this.props.campaigns?.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    10th jun
                    </TableCell>
                  <TableCell align="left">Description
                  </TableCell>
                  <TableCell component="th" scope="row">
                    pending
                    </TableCell>
                  <TableCell align="right">10000
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

export const ConnectedDonationsLoader = connector(MyDonationsLoader);

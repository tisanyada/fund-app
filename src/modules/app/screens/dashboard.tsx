import React, { Component, } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Container, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Divider } from "@material-ui/core"
import { Tabs, Tab } from "@material-ui/core"
import { LinkSharp } from "@material-ui/icons"
import {RootAppState} from "../../../redux/store"
import {useSelector} from "react-redux"

function Dashboard() {

  const user = useSelector((v: RootAppState) => {
    return v.authStore?.auth
  });

  return (
    <Grid container spacing={2} >
      {/* {primaryInfos.map((v) => (InforCard({ label: v.label, value: v.value })))} */}
      <Grid item xs={12} style={{ marginBottom: 24 }}>
        <Typography variant="h6" color="primary">Hello {user?.user?.fullname}</Typography>
        <Typography variant="body2">
          Budgets are moral documents. Federal funding should reflect the priorities and the values of the majority of the American people.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <div style={{ padding: 12, textAlign: 'center' }}>
          <ContentArea>
            <Typography variant="h6">Your Compaigns</Typography>
            <Typography>0</Typography>
          </ContentArea>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ padding: 12, textAlign: 'center' }}>
          <ContentArea>
            <Typography variant="h6">Total donations</Typography>
            <Typography>0</Typography>
          </ContentArea>
        </div>
      </Grid>
      <Grid item xs={12} style={{ marginTop: 24 }}>
        <Typography variant="h6" color="primary">Campaign statements</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Detail</TableCell>
                <TableCell align="right">Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[{ title: "Total donations", value: "0" }, { title: "Amount raised", value: "0" }
                , { title: "Withdrawable amount", value: "0" },
              { title: "Total campaign funds", value: "0" }].map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12} style={{ marginTop: 24 }}>
        <Typography variant="h6" color="primary">Recent activities</Typography>
        <ContentArea />
      </Grid>
    </Grid>
  );
}

export const ContentArea: React.FC<{}> = ({ children }) => {
  return <Paper style={{ padding: 12, background: "white", marginTop: 12 }}>
    {children}
  </Paper>;
}

export default Dashboard;


import React from 'react';
import { Button, Container, Typography, Paper, TextField, Grid, CircularProgress, Divider } from '@material-ui/core';
import { Link, Redirect } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { RootAppState, AppStore } from "../../redux/store"

import { createUserAccountAction, LoginAction, SignupDataSchema } from "../../redux/auth/actions"
import AuthLayout  from './authLayout';
// import "firebase/app"

const mapStateToProps = (state: RootAppState) => ({
  isLoggedIn: state.authStore?.auth.user == null ? false : true,
  auth: state.authStore
});

const mapDispatchToProps = () => ({
  login: () => {

  }
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


export class _LoginHere extends React.Component<PropsFromRedux, { signUpData: SignupDataSchema, sending: boolean }> {

  constructor(props: PropsFromRedux) {
    super(props)
    this.state = {
      sending: false,
      signUpData: {
        confirm_password: '',
        password: '',
        email: '',
        fullname: "",
        phone: "",
        username: "",
      }
    }
  }


  create = () => {
    createUserAccountAction(this.state.signUpData)
  }

  render() {

    if (this.props.isLoggedIn == true) {
      return <Redirect to="/" push />
    }

    return (
      <AuthLayout >
        <Container>
          <Grid container justify="center" alignContent="center" style={{ marginTop: 12, marginBottom: 12, height: "100vh" }}>
            <Grid item xs={12} sm={8} md={4} xl={3}>
              <div style={{ margin: "auto", display: 'flex', justifyContent: 'center' }}>
                {this.state.sending == true ? <CircularProgress /> : <div></div>}
              </div>
              <Paper>
                <div style={{ padding: 16 }}>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>Sign up</Typography>
                  <TextField label="Full name" fullWidth onChange={(event) => {
                    this.setState({ signUpData: { ...this.state.signUpData, fullname: event.target.value } })
                  }} style={{ marginTop: 16 }} value={this.state.signUpData.fullname}
                    placeholder="Fullname" required />
                  <TextField label="Username" fullWidth onChange={(event) => {
                    this.setState({ signUpData: { ...this.state.signUpData, username: event.target.value } })
                  }} style={{ marginTop: 16 }} value={this.state.signUpData.username} />
                  <TextField label="Email" fullWidth onChange={(event) => {
                    this.setState({ signUpData: { ...this.state.signUpData, email: event.target.value } })
                  }} style={{ marginTop: 16 }} value={this.state.signUpData.email}
                    placeholder="Email" required />

                  <TextField label="Phone" fullWidth onChange={(event) => {
                    this.setState({ signUpData: { ...this.state.signUpData, phone: event.target.value } })
                  }} style={{ marginTop: 16 }} value={this.state.signUpData.phone}
                    placeholder="Phone" />

                  <TextField label="Password" fullWidth onChange={(event) => {
                    this.setState({ signUpData: { ...this.state.signUpData, password: event.target.value, confirm_password: event.target.value } })
                  }} style={{ marginTop: 16 }} value={this.state.signUpData.password}
                    placeholder="Password" type="password" required />

                  <Button fullWidth style={{ marginTop: 16 }} variant="contained" color={"primary"}
                    size="large"
                    onClick={() => {
                      this.create()
                    }}>Signup
                  </Button>
                  <Button fullWidth
                    size="large" style={{ marginTop: 16 }} color="primary">

                    <Link to="/login">Login</Link>
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </AuthLayout>
    );
  }
}


export const SignupHere = connector(_LoginHere);

import React from 'react';
import { Button, Container, Typography, Paper, TextField, Grid, CircularProgress } from '@material-ui/core';
import { Redirect } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux"
import { RootAppState, AppStore } from "../../redux/store"
import { Link } from "react-router-dom"
import { LoginAction } from "../../redux/auth/actions"
import AuthLayout from "./authLayout"
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

export class _LoginHere extends React.Component<Props, { username: string, password: string, sending: boolean }> {


  constructor(props: Props) {
    super(props)
    this.state = {
      password: "",
      username: "",
      sending: false
    }
  }

  tryLogin = async () => {
    try {
      LoginAction(this.state.username, this.state.password)
    } catch (e) {
      console.log("error while loggin in")
      console.log(e)
    }
  }

  render() {

    if (this.props.isLoggedIn == true) {
      return <Redirect to="/" push />
    }

    return (
      <AuthLayout>
        <Container>
          <Grid container style={{ height: "100vh" }} justify="center" alignContent="center">
            <Grid item xs={12} sm={8} md={4} xl={3}>
              <div style={{ padding: 12, margin: "auto", display: 'flex', justifyContent: 'center' }}>
                {this.state.sending == true ? <CircularProgress /> : <div></div>}
              </div>
              <Paper style={{ padding: 12 }}>
                <Grid container>


                  <Grid item xs={12} style={{ padding: 12 }}>
                    <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: 12, }}>Sign in</Typography>
                    <TextField label="Username " fullWidth onChange={(event) => {
                      this.setState({ username: event.target.value })
                    }} />

                    <TextField label="Password" fullWidth onChange={(event) => {
                      this.setState({ password: event.target.value })
                    }} style={{ marginTop: 24 }} type="password"/>

                    <Button fullWidth style={{ marginTop: 24 }}
                      size="large"
                      variant="contained" color={"primary"}
                      onClick={this.tryLogin}
                    >Login</Button>
                    <Button fullWidth
                      size="large"

                      style={{ marginTop: 16 }} color="secondary">
                      <Link to="/register" style={{ textDecoration: "none" }}>Signup</Link>
                    </Button>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </AuthLayout>
    );
  }
}


export const LoginHere = connector(_LoginHere);

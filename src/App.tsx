import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AppBase from "./modules/index"
import AppThemeProvider from "./components/theme/appThemeprovider";
import { Provider } from "react-redux"
import { AppStore } from "./redux/store"
import { LoginHere } from './screens/auth/login';
import { SignupHere } from './screens/auth/signup';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={AppStore}>
       <ToastContainer />
      <AppThemeProvider>
        <BrowserRouter>
          <Switch>

            <Route path="/login" exact render={() => (
              <LoginHere />
            )} />

            <Route path="/register" exact render={() => (
              <SignupHere />
            )} />

            <Route path="/">
              <AppBase />
            </Route>

          </Switch>
        </BrowserRouter>
      </AppThemeProvider>
    </Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import UserApp from './UserApp';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/login">
          <div>
            <div className="d-flex p-4">
              <Login></Login>
            </div>
          </div>
        </Route>

        <PrivateRoute exact path="/" >
          <UserApp></UserApp>
        </PrivateRoute>

        <Redirect to='/' />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

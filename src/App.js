import React from 'react';
import './App.css';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';
import UserApp from './UserApp';
import { createStore } from 'redux'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// //Actions (especifico que quiero hacer, devuelte un tipo de accion)
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }

// //Reducer (indico como hacer la accion)
// const counterReducer = (state = 0, action) => {
//   switch (action, type) {
//     case 'INCREMENT':
//       return state + 1

//     default:
//       return state
//   }
// }

// //Store (este guarda todo)
// const store = createStore(counterReducer)

// //Distpach (ejecutar la accion)
// store.dispatch(increment())

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

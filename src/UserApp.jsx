import React from 'react'
import Pokemons from './pokemons/Pokemons'
import Trainers from './trainers/Trainers'
import Home from './Home'
import * as AuthService from './auth/AuthService'
import { Button } from 'react-bootstrap'

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
} from "react-router-dom";

const UserApp = () => {

    let history = useHistory()

    const handleLogout = () => {
        AuthService.logout()
        history.push('login')
    }

    return (
        <BrowserRouter>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pokemons">Pokemons</Link>
                    </li>
                    <li>
                        <Link to="/trainers">Trainers</Link>
                    </li>
                </ul>
            </nav>

            <div>Bienvenido {AuthService.getUser()}</div>
            
            <br></br>

            <Button variant="danger" onClick={handleLogout}>logout</Button>

            <br></br>
            <br></br>

            <Switch>
                <Route path="/pokemons">
                    <Pokemons></Pokemons>
                </Route>
                <Route path="/trainers">
                    <Trainers></Trainers>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Redirect to="/" />
            </Switch>

        </BrowserRouter>
    )
}

export default UserApp

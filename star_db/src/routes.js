import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Persons from "./pages/Persons/Persons"
import Planets from "./pages/Planets/Planets"
import Species from "./pages/Species/Species"

export const routes = (
    <Switch>
        <Route path="/" component={Persons} exact />
        <Route path="/species" component={Species} />
        <Route path="/planets" component={Planets} />
    </Switch>
)
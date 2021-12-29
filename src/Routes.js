import React from "react";
import history from "./history";
import { Route, Router, Switch } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={"/"} component={HomePage} />
            </Switch>
        </Router>
    )
}
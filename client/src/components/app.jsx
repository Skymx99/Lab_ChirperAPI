import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './header';
import Chirps from './chirps';
import viewChirp from './viewChirp';
//import Details from './details';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />

                    <Switch>
                        <Route exact path="/" component={Chirps} />
                        <Route exact path="/chirps/:id" component={viewChirp} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './TodoApp/Home'
import UpdateNote from './TodoApp/UpdateNote'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path = '/'  exact>
                            <Home />
                        </Route>
                        <Route path = '/update/:id' >
                            <UpdateNote />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

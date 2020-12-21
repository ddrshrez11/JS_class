import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import ApiCall from './ApiCall.js'
import Home from './Home.js';


export default class Routes extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <div>
                <Router>               
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/apiCall">
                            <ApiCall/>
                        </Route>
                    </Switch>
                </Router>        
            </div>
        )
    }
}

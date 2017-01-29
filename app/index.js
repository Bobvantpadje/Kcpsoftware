import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/App'
import Home from './components/Home'

ReactDOM.render(
    <div>
        {/* hashHistory ---> browserHistory when the site is on a server for clean urls*/}
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </div>, app);


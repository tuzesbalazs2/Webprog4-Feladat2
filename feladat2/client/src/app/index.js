import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from "react-redux";
import store from "../store";

import { NavBar } from '../components'
import { PostsList, PostsInsert, PostsUpdate } from '../pages'

import Landing from "../components/layout/Landing";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Provider store={store}>
        <Router>
            <NavBar />
            <Switch>
                <Route path="/posts/list" exact component={PostsList} />
                <Route path="/posts/create" exact component={PostsInsert} />
                <Route
                    path="/posts/update/:id"
                    exact
                    component={PostsUpdate}
                />
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
            <Landing />
        </Router>
        </Provider>
    )
}

export default App
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Expense from "./Expense"
import Add_Expense from "./Add_Expense"
import Revenue from "./Revenue";
import Add_Revenue from "./Add_Revenue"
import About from "./About";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import History from "./History";

function RouterPage() {
    return <div>
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/expense" exact component={Expense}/>
                <Route path="/revenue" exact component={Revenue}/>
                <Route path="/addex" exact component={Add_Expense}/>
                <Route path="/addrev" exact component={Add_Revenue}/>
                <Route path="/about" exact component={About}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/history" exact component={History}/>
            </Switch>
        </Router>
    </div>;
}

export default RouterPage;

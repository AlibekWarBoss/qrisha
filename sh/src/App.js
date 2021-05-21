import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignInComponent from "./Components/Authentication/SignInComponent";
import SignUpComponent from "./Components/Authentication/SignUpComponent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavigationComponent from "./Components/Main/NavigationComponent";
import DashboardComponent from "./Components/Dashboard/DashboardComponent";


function App() {

    return (<Router>
            <div className="App">
                <NavigationComponent/>

                <Switch>
                    <Route exact path='/' component={SignInComponent}/>
                    <Route path="/sign-in" component={SignInComponent}/>
                    <Route path="/sign-up" component={SignUpComponent}/>
                    <Route path="/dashboard" component={DashboardComponent}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
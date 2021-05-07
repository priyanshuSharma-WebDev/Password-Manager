import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar"
import client_http_req_functions from "./client-http/password.http";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Password from "./components/Password";
import ProfilePage from "./components/Profile/ProfilePage";
import Security from "./components/Security/Security";
import _404NotFound from "./_404NotFound"
import "./App.css";

function App() {
    const [passwordArray, setPasswordArray] = useState([])
    useEffect(() => {
        client_http_req_functions.getAllPasswords().then(res => {
            setPasswordArray(res);
        }).catch(e => console.error("ERROR: while getting all passwords", e));
    }, [])
    console.log("passwordArray: ", passwordArray)
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" render={(props) => <Password {...props} passwordArray={passwordArray} />} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/security" component={Security} />
                <Route path="*" component={_404NotFound} />
            </Switch>
        </div>
    )
}

export default App

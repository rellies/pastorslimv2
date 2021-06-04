//Packages
import React from 'react';
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }  from "react-router-dom";

//Components
import Contribute from "./components/Contribute";
import Pastors from "./components/Pastors";
import Sermons from "./components/Sermons";
import Events from "./components/Events";


function Header() {
    return(
        <Router>
            <header class="site-header">
                    <div class="container">
                        <a href="#" class="branding">
                            <img src="images/PastorPls.gif" class="Pastor" alt="PastorPls" />
                            <h1 class="site-title">Pay your God Tax, ya he-bitch!</h1>
                        </a>

                        <div class="main-navigation">
                            <button class="menu-toggle"><i class="fa fa-bars"></i> Menu</button>
                            <ul class="menu">
                                <li class="menu-item current-menu-item"><a href="index.html">Home<small></small></a></li>
                                <li class="menu-item"><a href="pastors.html">Pastors <small></small></a></li>
                                <li class="menu-item"><a href="sermons.html">Sermons<small></small></a></li>
                                <li class="menu-item"><a href="events.html">Events <small></small></a></li>
                                <li class="menu-item"><a href="contribute.html">Contribute<small></small></a></li>
                                <li class="menu-item"><a href="#">Contact <small></small></a></li>
                                <li class="menu-item"><img class="DiscordLogo" src="images/Discord-Logo-White.png"></img><a href="/api/discord_auth/login">Login</a></li>
                            </ul>
                        </div>

                        <div class="mobile-navigation"></div>
                    </div>
                </header>

            <Switch>
                <Route path="/pastors"><Pastors /></Route>
                <Route path="/sermons"><Sermons /></Route>
                <Route path="/contribute"><Contribute /></Route>
                <Route path="/events"><Events /></Route>
            </Switch>
        </Router>
    )

}

export default Header;
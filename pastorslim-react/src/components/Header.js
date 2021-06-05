//Packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Components
import Home from "./Home";
import Contribute from "./Contribute";
import Pastors from "./Pastors";
import Sermons from "./Sermons";
import Events from "./Events";
//import DiscordAuth from "./../api/discord_auth"

//CSS
import "./../App.css"

//Images
import Pastor from "./../images/PastorPls.gif";
import DiscordLogo from "./../images/Discord-Logo-White.png";


function Header() {
    return(
        <Router>
            <header class="site-header">
                    <nav class="main-navigation">
                        <div class="container">
                        <Link to="/" class="branding">
                            <img src={Pastor} class="Pastor" alt="PastorPls" />
                            <h1 class="header-title">Pay your God Tax, ya he-bitch!</h1>
                        </Link>
                        </div>
                        <ul class="menu">
                            <li class="menu-item"><Link to="/">Home</Link></li>
                            <li class="menu-item"><Link to="/pastors">Pastors</Link></li>
                            <li class="menu-item"><Link to="/sermons">Sermons</Link></li>
                            <li class="menu-item"><Link to={"/contribute"}>Contribute</Link></li>
                            <li class="menu-item"><Link to="/events">Events</Link></li>
                            <li class="menu-item"><img src={DiscordLogo} class="DiscordLogo" alt="Sign in with Discord"/><Link to="/api/discord_auth/login">Login</Link></li>
                        </ul>
                    </nav>
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pastors" component={Pastors} />
                <Route path="/sermons" component={Sermons} />
                <Route path="/contribute" component={Contribute} />
                <Route path="/events" component={Events} />
                {/* <Route path="/api/discord_auth/login"><DiscordAuth /></Route> */}
            </Switch>
        </Router>
    );

}

export default Header;
import React from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Jokes from "./Jokes";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/jokes">Jokes</NavLink>
        <NavLink to="/" onClick={this.logout}>
          Log Out
        </NavLink>

        <Route exact path="/" component={Home} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/jokes" render={props => <Jokes {...props} />} />
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };
}

export default NavBar;

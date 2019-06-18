import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post(endpoint, userLogin)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    return (
      <div>
        <h2>Login!</h2>
        <form onSubmit={this.login}>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
          />
          <input
            onChange={this.inputHandler}
            type="password"
            placeholder="password"
            value={this.state.password}
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

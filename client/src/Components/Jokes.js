import React from "react";
import axios from "axios";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loggedIn: false
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("http://localhost:3300/api/jokes", options)
      .then(res => {
        this.setState({
          jokes: res.data,
          loggedIn: true
        });
      })
      .catch(error => {
        this.setState({
          loggedIn: false
        });
      });
  };

  dadJokes = () => {
    if (this.state.loggedIn) {
      return (
        <div>
          <h2>The best dad jokes EVER</h2>
          {this.state.jokes.map(joke => {
            return (
              <div key={joke.id}>
                <p>{joke.joke}</p>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <p>You have to be logged in for this!!</p>
        </div>
      );
    }
  };

  render() {
    return <this.dadJokes />;
  }
}

export default Jokes;

import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    //State variable declaration
    this.state = {
      username: "",
      password: "",
      isAuthenticated: false,
    };
    //function declaration
    this.shoot = this.shoot.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    if (this.state.username === "anirudh" && this.state.password === "Pa1234") {
      alert("Login Success");
      this.setState({ isAuthenticated: true });
    } else {
      alert("Login failed");
      this.setState({
        isAuthenticated: false,
        username: "",
        password: "",
      });
    }
  }
  //function implementation
  shoot(e) {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  }
  render() {
    return this.state.isAuthenticated === true ? (
      <div>User logged succesfull</div>
    ) : (
      <div>
        <p>Enter your name:</p>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={(e) => {
            this.shoot(e);
          }}
        />
        <p>Enter your password:</p>
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={(e) => {
            this.shoot(e);
          }}
        />
        <br />

        <input type="submit" onClick={this.validate} />
      </div>
    );
  }
}

export default Home;

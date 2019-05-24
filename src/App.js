import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register/Register";

class App extends Component {
  // componentDidMount() {
  //   this.getDogs();
  // }
  handleRegister = async data => {
    try {
      const registerCall = await fetch(
        "http://localhost:8000/users/registration",
        {
          method: "POST",
          body: JSON.stringify(data),
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const response = await registerCall.json();
      console.log(response, "from the flask server on localhost:8000");
    } catch (err) {
      console.log(err);
    }
  };
  // getDogs = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/v1/dogs", {
  //       credentials: "include"
  //     });

  //     if (response.ok) {
  //       const responseParsed = await response.json();
  //       console.log(responseParsed);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  render() {
    return (
      <div className="App">
        <Register handleRegister={this.handleRegister} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import LandingPage from "./LandingPage";

class App extends Component {
  state = { isLocalSetUp: false, storeValue: "", nsKeys: [] };
  componentDidMount() {
    let isLocalSetUp = false;
    let storeValue = localStorage.getItem("debug");
    let nsKeys = [];
    if (storeValue) {
      isLocalSetUp = true;
      nsKeys = storeValue.split(",");
    }

    this.setState({ isLocalSetUp, storeValue, nsKeys });
  }
  render() {
    return (
      <>
       <LandingPage/>
      </>
    );
  }
}
export default App;
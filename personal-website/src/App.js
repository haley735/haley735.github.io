import './App.css';
import React, { Component } from "react";
import {Routes, Route } from "react-router-dom";
import WorkHistoryBlock from "./components/WorkHistory/work-history.component";


class App extends Component {
  render(){
    return (
      <div className="App">
          <Routes>

          <Route path="/" element={<WorkHistoryBlock />} />
          </Routes>
      </div>
    );
  }
  
}

export default App;

import './App.css';
import React, { Component } from "react";
import {Routes, Route } from "react-router-dom";
import WorkHistoryBlock from "./components/WorkHistory/work-history.component";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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

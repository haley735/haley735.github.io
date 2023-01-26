import './App.css';
import React, { Component } from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import WorkHistoryBlock from "./components/Work History/work-history.component";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <div className="App">
          </div>
        <Routes>

          <Route path="/" element={<WorkHistoryBlock />} />
        </Routes>

      </BrowserRouter>
    );
  }
  
}

export default App;

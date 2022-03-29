import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from './RecommendedVideos';
import './App.css';
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      {/* <h1>Start</h1> */}

      {/* incharge of determining what url loads what componets */}
      {/* Switch determine which router to look at */}
      <Router> 
        <Header />
      <Switch>
        <Route path="/search/:searchTerm">
        <div className="app__page">
      <Sidebar />
      <SearchPage />
      </div>
        </Route>
        <Route path="/">
      <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
      </div>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

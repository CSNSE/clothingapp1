import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar1, ShirtCard1Collection, ShirtCard2Collection, ShirtCreateForm } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App"> {/* Apply the "App" class to the main container */}
        <div className="ui-component-container">
          <Routes>
            <Route path="/" element={<div><NavBar1/><ShirtCard2Collection /></div>} />
            <Route path="/shirt" element={<div><NavBar1/><ShirtCreateForm /></div>} />
            <Route path="/shirtcard1collection" element={<ShirtCard1Collection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default withAuthenticator(App);

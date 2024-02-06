import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoteCreateForm, ShirtCard1Collection, ShirtCard2Collection, ShirtCreateForm } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="ui-component-container">
        <Routes>
          <Route path="/" element={<ShirtCard2Collection />} />
          <Route path="/other" element={<NoteCreateForm />} />
          <Route path="/shirt" element={<ShirtCreateForm />} />
          <Route path="/shirtcard1collection" element={<ShirtCard1Collection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default withAuthenticator(App);

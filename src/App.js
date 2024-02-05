import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoteCreateForm, ShirtCard1Collection, ShirtCreateForm } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShirtCard1Collection />} />
        <Route path="/other" element={<NoteCreateForm />} />
        <Route path="/shirt" element={<ShirtCreateForm />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default withAuthenticator(App);

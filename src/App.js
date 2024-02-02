import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoteCreateForm, ShirtCard1Collection, ShirtCreateForm } from './ui-components';
import "./App.css";
// import { components } from "@aws-amplify/ui-react";

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

export default App;

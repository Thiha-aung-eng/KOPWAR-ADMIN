import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterLayout from './layout/admin/MasterLayout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<MasterLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

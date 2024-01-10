import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Header from './Dashboard/View all/Header';
import StudentGrid from './Dashboard/View all/StudentGrid';
import 'bootstrap/dist/css/bootstrap.min.css'
import Charts from './Dashboard/View all/Charts';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/view-all" element={<StudentGrid />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

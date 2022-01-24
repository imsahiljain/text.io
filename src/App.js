import React from 'react';
import About from './components/About';
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<><Header /> <TextArea /> <ToastContainer /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

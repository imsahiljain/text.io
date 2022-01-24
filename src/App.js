import React from 'react';
// import About from './components/About';
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <TextArea />
      {/* <About/> */}
      <ToastContainer />
    </>
  );
}

export default App;

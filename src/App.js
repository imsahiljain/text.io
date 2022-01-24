import React from 'react';
// import About from './components/About';
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import { ToastContainer, toast } from 'react-toastify';

// import Toast from './components/Toast';

function App() {
  return (
    <>
      <Header />
      <TextArea />
      {/* <Toast /> */}
      {/* <About/> */}
      <ToastContainer />
    </>
  );
}

export default App;

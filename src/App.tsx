import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Routes from './route/route';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer
        position={"bottom-center"}
        autoClose={2000}
        theme={"colored"}
      />
    </>
  );
}

export default App;

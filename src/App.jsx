import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

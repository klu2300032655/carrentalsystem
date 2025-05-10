import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./componens/Navbar";
import Homepage from "./Pages/Homepage";
import Buyacar from "./componens/Buyacar";
import AddCar from "./componens/AddCar";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";
import PaymentForm from "./Pages/Payment";
import ChatBot from "./componens/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/buyacar" element={<Buyacar />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}

export default App; 
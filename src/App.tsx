import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import { ROUTES } from "./Utils/Constant";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddPost from "./Components/AddPost";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ADD_POST} element={<AddPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

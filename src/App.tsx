import React from "react";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<UsersList/>} />
          <Route path="/todos" element={<h1>пока ничего</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;

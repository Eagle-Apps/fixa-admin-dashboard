import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./client-dashboard/Account/Login";
import ClientHome from "./client-dashboard/home/ClientHome";
import Dashboard from "./dashboard/Index";
import Profile from "./client-dashboard/Account/Profile";
import Staffs from "./client-dashboard/staff-mgt/staff_list/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ClientHome />} />
          <Route path="my-account" element={<Profile />} />
          <Route path="staff-list" element={<Staffs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

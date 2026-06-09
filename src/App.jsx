import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Layout Pages */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          {/* 404 Inside Layout */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>

        {/* Auth Pages */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route 
        path="/admin-dashboard"
        element={<AdminDashboard/>}
        />

      </Routes>
    </HashRouter>
  );
}

export default App;
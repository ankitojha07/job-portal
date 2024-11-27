import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup.tsx";
import Applications from "./pages/Applications.tsx";
import EditProfile from "./pages/EditProfile.tsx";
import Login from "./pages/Login.tsx";
import Layout from "./components/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="applications" element={<Applications />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

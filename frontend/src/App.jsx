import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function GoogleAuthWrapper() {
    return (
      <GoogleOAuthProvider clientId="817011788427-gvg7b2o642mp674pgbkgnska8hjmt5a4.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  }

  const PrivateRoutes = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

    return (
      <BrowserRouter>
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/login" element={<GoogleAuthWrapper />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/dashboard"
            element={<PrivateRoutes element={<Dashboard />} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;

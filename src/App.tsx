import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, LandingPage, Registration, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Registration />} />

        {/* Protect the dashboard */}
        <Route path="dashboard" element={<ProtectedRoute />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;

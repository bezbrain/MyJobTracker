import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddJobs, AllJobs, Profile, SharedLayout, Stat, Error } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stat />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/add-job" element={<AddJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;

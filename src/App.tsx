import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AddJobs, AllJobs, Profile, SharedLayout, Stat, Error } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colRef, trackDataInDB } from "./firebaseStore";

const getData = async () => {
  trackDataInDB(colRef, (snapshot) => {
    console.log(snapshot.docs);

    const jobs = snapshot.docs.map((each) => {
      // console.log(each);
      return each.data();
    });
    console.log(jobs);
  });
};

const App = () => {
  useEffect(() => {
    getData();
  }, []);

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

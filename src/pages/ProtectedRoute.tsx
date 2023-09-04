import { getUserId } from "../DBSnapShot";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddJobs, AllJobs, Profile, SharedLayout, Stat, Error } from "../pages";

const ProtectedRoute = () => {
  const userId = getUserId();

  if (!userId) {
    return <Navigate to="/" />;
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Stat />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="add-job" element={<AddJobs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoute;

import React from "react";
import { getUserId } from "../DBSnapShot";
import { Navigate, Route } from "react-router-dom";
import { AddJobs, AllJobs, Profile, SharedLayout, Stat, Error } from "../pages";

// interface ProtectedRouteProps {
//   children: React.ReactNode; // Accept any type of children
// }

const ProtectedRoute = () => {
  const userId = getUserId();

  if (!userId) {
    return <Navigate to="/" />;
  }
  return (
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Stat />} />
      <Route path="all-jobs" element={<AllJobs />} />
      <Route path="add-job" element={<AddJobs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Route>
  );
};

export default ProtectedRoute;

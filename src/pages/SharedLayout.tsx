import Header from "../components/General/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default SharedLayout;

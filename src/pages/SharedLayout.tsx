import Header from "../components/General/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/General/SideBar";
import Wrapper from "../StylesWrappers/General/sharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <section className="sidebar_and_outlet">
        <SideBar />
        <Outlet />
      </section>
    </Wrapper>
  );
};

export default SharedLayout;

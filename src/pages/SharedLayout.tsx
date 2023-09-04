import Header from "../components/General/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../components/General/SideBar";
import Wrapper from "../StylesWrappers/General/sharedLayout";
import Content from "../StylesWrappers/General/Content";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <section className="sidebar_and_outlet">
        <SideBar
          navSection="nav-section"
          smScreenClose="lg-screen-close-icon"
          toggleNavSection="remove-nav"
        />
        <SideBar
          navSection="small-nav-section"
          smScreenClose="sm-screen-close-icon"
        />
        <Content>
          <Outlet />
        </Content>
      </section>
    </Wrapper>
  );
};

export default SharedLayout;

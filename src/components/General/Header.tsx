import Logo from "./Logo";
import Wrapper from "../../StylesWrappers/General/header";
import NavIcon from "./NavIcon";

const Header = () => {
  return (
    <Wrapper>
      <div className="logo-and-icon">
        <Logo />
        <NavIcon />
      </div>
      <div className="header-text">
        <p>Dashboard</p>
      </div>
      <div className="profile">
        <h3>Name</h3>
      </div>
    </Wrapper>
  );
};

export default Header;

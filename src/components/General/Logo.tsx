import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/logo";
import { logo } from "../../assets/images/images";

const Logo = () => {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();

  // Function to handle where the page navigate to when the logo is clicked
  const handleLogoClick = () => {
    if (location.pathname === "/register") {
      navigate("/");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Wrapper>
      <div onClick={handleLogoClick}>
        <img
          src={logo}
          alt="Logo"
          className={`${
            location.pathname === "/register" || location.pathname === "/"
              ? "reg__logo"
              : ""
          }`}
        />
      </div>
    </Wrapper>
  );
};

export default Logo;

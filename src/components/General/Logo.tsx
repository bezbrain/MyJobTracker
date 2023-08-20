import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/logo";

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
        <p
          className={`${
            location.pathname === "/register" || location.pathname === "/"
              ? "reg__logo"
              : ""
          }`}
        >
          Jobtrackier
        </p>
      </div>
    </Wrapper>
  );
};

export default Logo;

import Logo from "./Logo";
import Wrapper from "../../StylesWrappers/General/header";
import NavIcon from "./NavIcon";
import { getEmail } from "../../DBSnapShot";

const Header = () => {
  const email: string | null = getEmail(); // Get user email

  /* Function to extract email */
  const extratingUserEmail = () => {
    if (email === null) {
      return null;
    }
    const endIndex = email.indexOf("@");
    const extractedEmail = email.substring(0, endIndex);
    return extractedEmail;
  };

  const emailExtract = extratingUserEmail();

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
        <h3>{emailExtract}</h3>
      </div>
    </Wrapper>
  );
};

export default Header;

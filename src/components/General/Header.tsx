import { useEffect, useState } from "react";
import Logo from "./Logo";
import Wrapper from "../../StylesWrappers/General/header";
import NavIcon from "./NavIcon";
import { getUserId, getUserSnapshot } from "../../DBSnapShot";
import {
  auth,
  signOutUser,
  trackDataInDB,
  userInfoColRef,
} from "../../firebaseStore";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Header = () => {
  const [userValue, setUserValue] = useState<string>("");
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const localStorageId: string | null = getUserId();

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    // Function to get the username and present it on the dashboard
    getUserSnapshot(localStorageId, setUserValue);
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    await signOutUser(auth);
    toast.success("You are logged out");
    setIsLogout(false);
    setTimeout(() => {
      navigate("/");
    }, 2000);
    localStorage.removeItem("userId");
  };

  return (
    <Wrapper>
      <div className="logo-and-icon">
        <Logo />
        <NavIcon />
      </div>
      <div className="header-text removeAtMobile">
        <p>Dashboard</p>
      </div>
      <div className="profile">
        <h3 onClick={() => setIsLogout(!isLogout)}>{userValue}</h3>
        {isLogout && <button onClick={handleLogout}>Logout</button>}
      </div>
    </Wrapper>
  );
};

export default Header;

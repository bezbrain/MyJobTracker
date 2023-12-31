import { useEffect, useState } from "react";
import Logo from "./Logo";
import Wrapper from "../../StylesWrappers/General/header";
import NavIcon from "./NavIcon";
import { getUserId, getUserSnapshot } from "../../DBSnapShot";
import { auth, signOutUser } from "../../firebaseStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    navigate("/");
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
      {userValue ? (
        <div className="profile">
          <h3 onClick={() => setIsLogout(!isLogout)}>{userValue}</h3>
          {isLogout && <button onClick={handleLogout}>Logout</button>}
        </div>
      ) : (
        <Skeleton width={90} height={35} />
      )}
    </Wrapper>
  );
};

export default Header;

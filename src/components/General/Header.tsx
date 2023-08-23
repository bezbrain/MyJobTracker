import { useEffect, useState } from "react";
import Logo from "./Logo";
import Wrapper from "../../StylesWrappers/General/header";
import NavIcon from "./NavIcon";
import { getUserId } from "../../DBSnapShot";
import { trackDataInDB, userInfoColRef } from "../../firebaseStore";

const Header = () => {
  const [userValue, setUserValue] = useState<string>("");
  const localStorageId = getUserId();

  // Function to get the username and present it on the dashboard
  const getUserSnapshot = () => {
    trackDataInDB(userInfoColRef, (snapshot) => {
      snapshot.docs.forEach((each) => {
        const userId = each.data().userId2;

        if (localStorageId === userId) {
          setUserValue(each.data().username);
        }
      });
    });
  };

  useEffect(() => {
    getUserSnapshot();
  }, []);

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
        <h3>{userValue}</h3>
      </div>
    </Wrapper>
  );
};

export default Header;

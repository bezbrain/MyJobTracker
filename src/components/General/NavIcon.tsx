import { useDispatch } from "react-redux/es/exports";
import Wrapper from "../../StylesWrappers/General/navIcon";
import { NavBarIcon } from "../../assets/icons/icons";
import { toggleNav, toggleSmallNav } from "../../features/nav/navSlice";
import { AppDispatch } from "../../store";

const NavIcon = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNavIcon = () => {
    dispatch(toggleNav()); // Toggle nav section on screen size
    dispatch(toggleSmallNav()); // Open nav bar at small screen
  };

  return (
    <Wrapper onClick={handleNavIcon}>
      <NavBarIcon />
    </Wrapper>
  );
};

export default NavIcon;

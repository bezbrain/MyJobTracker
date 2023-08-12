import { useDispatch } from "react-redux/es/exports";
import Wrapper from "../../StylesWrappers/General/navIcon";
import { NavBarIcon } from "../../icons/icons";
import { toggleNav } from "../../features/nav/navSlice";
import { AppDispatch } from "../../store";

const NavIcon = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Wrapper onClick={() => dispatch(toggleNav())}>
      <NavBarIcon />
    </Wrapper>
  );
};

export default NavIcon;

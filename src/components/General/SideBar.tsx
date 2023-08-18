import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useLocation } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/sideBar";
import { sideBarData } from "../../data";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { closeSmallNav } from "../../features/nav/navSlice";

interface Props {
  navSection: string;
  smScreenClose: string;
}

const SideBar: React.FC<Props> = ({ navSection, smScreenClose }) => {
  const { isOpenNav } = useSelector((store: RootState) => store.navStore);
  const { isOpenSmallNav } = useSelector((store: RootState) => store.navStore);

  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleMouseOver = (index: number) => {
    setIsHoverIndex(index);
  };

  const handleNavItem = (link: string) => {
    navigate(`/${link}`); // Dynamically navigate to different page
    dispatch(closeSmallNav()); // Close nav section when each nav item is clicked at small screen
  };

  return (
    <Wrapper>
      <nav
        className={`${navSection} ${isOpenNav ? "remove-nav" : ""} ${
          isOpenSmallNav ? "add-sm-nav" : "remove-sm-nav"
        }`}
      >
        <ul>
          <FaTimes
            className={smScreenClose}
            onClick={() => dispatch(closeSmallNav())}
          />
          {sideBarData.map((each) => {
            const { id, icon, navName, link } = each;
            return (
              <li
                key={id}
                onClick={() => handleNavItem(link)}
                onMouseOver={() => handleMouseOver(id)}
                onMouseOut={() => setIsHoverIndex(null)}
                className={`${id === isHoverIndex ? "add-hover" : ""}`}
              >
                <p
                  className={`${
                    location.pathname === `/${link}` ? "add-color" : ""
                  }`}
                >
                  {icon}
                </p>
                <p>{navName}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrapper>
  );
};

export default SideBar;

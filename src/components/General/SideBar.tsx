import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useLocation, NavigateFunction } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/sideBar";
import { sideBarData } from "../../data";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { closeSmallNav } from "../../features/nav/navSlice";
import { changeTextContent } from "../../features/allJobs/editSlice";
import { clearInput } from "../../features/addJob/addJobSlice";

interface Props {
  navSection: string;
  smScreenClose: string;
  toggleNavSection?: string;
}

const SideBar: React.FC<Props> = ({
  navSection,
  smScreenClose,
  toggleNavSection,
}) => {
  const { isOpenNav, isOpenSmallNav } = useSelector(
    (store: RootState) => store.navStore
  );

  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);

  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleMouseOver = (index: number) => {
    setIsHoverIndex(index);
  };

  const handleNavItem = (link: string) => {
    navigate(`/dashboard${link}`); // Dynamically navigate to different page
    dispatch(closeSmallNav()); // Close nav section when each nav item is clicked at small screen
    dispatch(changeTextContent()); // To set button content back to "submit" if job is not updated but user nav to another page
    dispatch(clearInput()); // to set input fields to empty if job is not updated but user nav to another page
  };

  return (
    <Wrapper>
      <nav
        className={`${navSection} ${isOpenNav ? toggleNavSection : ""} ${
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
                    location.pathname === `/dashboard${link}` ? "add-color" : ""
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

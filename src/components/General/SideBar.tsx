import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useLocation } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/sideBar";
import { sideBarData } from "../../data";
import { RootState } from "../../store";

const SideBar = () => {
  const { isOpenNav } = useSelector((store: RootState) => store.navStore);

  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseOver = (index: number) => {
    setIsHoverIndex(index);
  };

  return (
    <Wrapper>
      <nav className={`${isOpenNav ? "remove-nav" : ""}`}>
        <ul>
          {sideBarData.map((each) => {
            const { id, icon, navName, link } = each;
            return (
              <li
                key={id}
                onClick={() => navigate(`/${link}`)}
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

import { useNavigate, useLocation } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/sideBar";
import { sideBarData } from "../../data";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <nav>
        <ul>
          {sideBarData.map((each) => {
            const { id, icon, navName, link } = each;
            return (
              <li key={id} onClick={() => navigate(`/${link}`)}>
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

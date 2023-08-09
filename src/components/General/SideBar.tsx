import { useNavigate } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/sideBar";
import { sideBarData } from "../../data";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <nav>
        <ul>
          {sideBarData.map((each) => {
            const { id, icon, navName, link } = each;
            return (
              <li key={id} onClick={() => navigate(`${link}`)}>
                <p>{icon}</p>
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

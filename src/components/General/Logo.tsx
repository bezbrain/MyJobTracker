import { NavigateFunction, useNavigate } from "react-router-dom";
import Wrapper from "../../StylesWrappers/General/logo";

const Logo = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Wrapper>
      <div onClick={() => navigate("/dashboard")}>
        <p>Jobtrackier</p>
      </div>
    </Wrapper>
  );
};

export default Logo;

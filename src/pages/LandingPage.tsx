import { NavigateFunction, useNavigate } from "react-router-dom";
import LandingWrapper from "../StylesWrappers/LandingPage/landingWrapper";
import Logo from "../components/General/Logo";
import TitleText from "../components/General/Helmet";
import { staticImage } from "../assets/images/images";

const LandingPage = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <LandingWrapper>
      <TitleText
        title="Jobtrackier - Your Job, Your Dream | #1 Software Product for Tracking Jobs
      Applied for"
      />
      <div className="logo__con">
        <Logo />
      </div>
      <summary>
        <section className="landing__content__and__img">
          <div className="landing__content">
            <p>
              Keep <span>Tracking</span> Jobs
            </p>
            <p>
              Your personalized job tracker that allows you know which job is
              which. Track applications, interviews, and never miss a deadline
              again. Get ready to land your dream job effortlessly. Stay
              organized!
            </p>
            <button onClick={() => navigate("/register")}>
              Login/Register
            </button>
          </div>
          <div className="landing__img">
            <img src={staticImage} alt="Job" />
          </div>
        </section>
      </summary>
    </LandingWrapper>
  );
};

export default LandingPage;

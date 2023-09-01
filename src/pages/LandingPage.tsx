import { NavigateFunction, useNavigate } from "react-router-dom";
import LandingWrapper from "../StylesWrappers/LandingPage/landingWrapper";
import Logo from "../components/General/Logo";
import TitleText from "../components/General/Helmet";

const LandingPage = () => {
  const navigate: NavigateFunction = useNavigate();

  const staticImage: string =
    "https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114475.jpg?size=626&ext=jpg&ga=GA1.2.2051698419.1692458160&semt=country_rows_v2";

  return (
    <LandingWrapper>
      <TitleText title="Job Tracker" />
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
              Your personal job tracker that allows you know which job is which.
              Track applications, interviews, and never miss a deadline again.
              Get ready to land your dream job effortlessly. Stay organized!
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

import LandingWrapper from "../StylesWrappers/LandingPage/landingWrapper";
import Logo from "../components/General/Logo";

const LandingPage = () => {
  return (
    <LandingWrapper>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus placeat aut, similique rerum id, magnam ducimus ex
              maiores voluptatum ullam labore nulla dolorum veniam ipsam
              quaerat, minus culpa ad expedita.
            </p>
            <button>Login/Register</button>
          </div>
          <div className="landing__img">
            <img
              src="https://img.freepik.com/free-photo/fun-3d-cartoon-illustration-indian-businessman_183364-114475.jpg?size=626&ext=jpg&ga=GA1.2.2051698419.1692458160&semt=country_rows_v2"
              alt="Job"
            />
          </div>
        </section>
      </summary>
    </LandingWrapper>
  );
};

export default LandingPage;

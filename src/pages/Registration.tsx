import { useState } from "react";
import InputBox from "../components/General/InputBox";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import RegWrapper from "../StylesWrappers/registeration/register";
import Logo from "../components/General/Logo";
import RegInputWrapper from "../StylesWrappers/General/regInputBox";
import Button from "../components/General/Button";
import ButtonWrapper from "../StylesWrappers/General/button";

const Registration = () => {
  const [toggleReg, setToggleReg] = useState<boolean>(true);

  const { name, email, password } = useSelector(
    (store: RootState) => store.regStore
  );

  const handleChange = () => {
    //
  };

  const handleSubmit = () => {
    //
  };

  if (toggleReg) {
    return (
      <RegWrapper>
        <RegInputWrapper>
          <Logo />
          <p>Login</p>
          <InputBox
            jobName="Email"
            typeName="text"
            inputName="email"
            inputValue={email}
            handleChange={handleChange}
          />
          <InputBox
            jobName="Password"
            typeName="password"
            inputName="password"
            inputValue={password}
            handleChange={handleChange}
          />
          <ButtonWrapper>
            <Button
              button="Submit"
              handleSubmit={handleSubmit}
              type="submit"
              allJobsBtn="reg__btn"
            />
          </ButtonWrapper>
          <footer>
            <p>
              Not a member yet?{" "}
              <span onClick={() => setToggleReg(false)}>Register</span>
            </p>
          </footer>
        </RegInputWrapper>
      </RegWrapper>
    );
  }

  return (
    <RegWrapper>
      <RegInputWrapper>
        <Logo />
        <p>Register</p>
        <InputBox
          jobName="Name"
          typeName="text"
          inputName="name"
          inputValue={name}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Email"
          typeName="text"
          inputName="email"
          inputValue={email}
          handleChange={handleChange}
        />
        <InputBox
          jobName="Password"
          typeName="password"
          inputName="password"
          inputValue={password}
          handleChange={handleChange}
        />
        <ButtonWrapper>
          <Button
            button="Submit"
            handleSubmit={handleSubmit}
            type="submit"
            allJobsBtn="reg__btn"
          />
        </ButtonWrapper>
        <footer>
          <p>
            Already a member?{" "}
            <span onClick={() => setToggleReg(true)}>Login</span>
          </p>
        </footer>
      </RegInputWrapper>
    </RegWrapper>
  );
};

export default Registration;

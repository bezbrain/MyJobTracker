import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonWrapper from "../../StylesWrappers/General/button";
import RegInputWrapper from "../../StylesWrappers/General/regInputBox";
import RegWrapper from "../../StylesWrappers/registeration/register";
import Button from "../General/Button";
import InputBox from "../General/InputBox";
import Logo from "../General/Logo";
import { AppDispatch, RootState } from "../../store";
import { getLoginValues } from "../../features/registration/loginSlice";
import { LoginProp } from "../../model";

const Login = ({ setToggleReg }: LoginProp) => {
  const { login_email, login_password } = useSelector(
    (store: RootState) => store.loginStore
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(getLoginValues({ name, value }));
  };

  const handleLoginSubmit = (e: React.FormEvent<Element>) => {
    e.preventDefault();
  };

  return (
    <RegWrapper>
      <RegInputWrapper>
        <Logo />
        <p>Login</p>
        <InputBox
          jobName="Email"
          typeName="text"
          inputName="login_email"
          inputValue={login_email}
          handleChange={handleLoginChange}
        />
        <InputBox
          jobName="Password"
          typeName="password"
          inputName="login_password"
          inputValue={login_password}
          handleChange={handleLoginChange}
        />
        <ButtonWrapper>
          <Button
            button="Submit"
            handleSubmit={handleLoginSubmit}
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
};

export default Login;

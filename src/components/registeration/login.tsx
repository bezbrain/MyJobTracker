import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonWrapper from "../../StylesWrappers/General/button";
import RegInputWrapper from "../../StylesWrappers/General/regInputBox";
import RegWrapper from "../../StylesWrappers/registeration/register";
import Button from "../General/Button";
import InputBox from "../General/InputBox";
import Logo from "../General/Logo";
import { AppDispatch, RootState } from "../../store";
import { getLoginValues, login } from "../../features/registration/loginSlice";
import { LoginProp, LoginState } from "../../model";
import { toast } from "react-toastify";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ToggleShowPassword from "../General/toggleShowPassword";
import TitleText from "../General/Helmet";

const Login = ({ setToggleReg }: LoginProp) => {
  const { loginUser, loginLoading, loginDisable } = useSelector(
    (store: RootState) => store.loginStore
  );

  // State to control the show password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { login_createdBy, login_email, login_password } = loginUser;

  const dispatch = useDispatch<AppDispatch>();

  const navigate: NavigateFunction = useNavigate();

  // Handle Login input change
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name as keyof LoginState;
    let value = e.target.value;
    dispatch(getLoginValues({ name, value }));
  };

  // Handle Login click button
  const handleLoginSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (!login_email || !login_password) {
      toast.error("No field should be empty");
    } else {
      await dispatch(
        login({ login_createdBy, login_email, login_password, navigate })
      );
    }
  };

  return (
    <RegWrapper>
      <TitleText title="Login" />
      <RegInputWrapper>
        <Logo />
        <p>Login</p>
        <InputBox
          jobName="Email"
          typeName="email"
          inputName="login_email"
          inputValue={login_email}
          handleChange={handleLoginChange}
        />
        <div
          style={{
            position: "relative",
          }}
        >
          <InputBox
            jobName="Password"
            typeName={`${showPassword ? "text" : "password"}`}
            inputName="login_password"
            inputValue={login_password}
            handleChange={handleLoginChange}
          />
          <ToggleShowPassword
            password={login_password}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
        </div>
        <ButtonWrapper>
          <Button
            button="Submit"
            handleSubmit={handleLoginSubmit}
            type="submit"
            allJobsBtn="reg__btn"
            allLoading={loginLoading}
            allDisable={loginDisable}
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

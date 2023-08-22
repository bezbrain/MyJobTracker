import { ChangeEvent } from "react";
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

const Login = ({ setToggleReg }: LoginProp) => {
  const { login_createdBy, login_email, login_password } = useSelector(
    (store: RootState) => store.loginStore
  );

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

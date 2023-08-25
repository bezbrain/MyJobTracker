import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegInputWrapper from "../../StylesWrappers/General/regInputBox";
import RegWrapper from "../../StylesWrappers/registeration/register";
import { AppDispatch, RootState } from "../../store";
import InputBox from "../General/InputBox";
import ButtonWrapper from "../../StylesWrappers/General/button";
import Logo from "../General/Logo";
import { getRegValues, reg } from "../../features/registration/registerSlice";
import { RegProp, RegState } from "../../model";
import Button from "../General/Button";
import { toast } from "react-toastify";

const Reg = ({ setToggleReg }: RegProp) => {
  const { user, isLoading, isDisable } = useSelector(
    (store: RootState) => store.regStore
  );

  const { createdBy, username, email, password } = user;

  const dispatch = useDispatch<AppDispatch>();

  // Hanlde Registeration input change
  const handleRegChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name as keyof RegState;
    let value = e.target.value;
    dispatch(getRegValues({ name, value }));
  };

  // Handle click of Register button
  const handleRegSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    console.log("Clicked");

    if (!username || !email || !password) {
      toast.error("No field should be empty");
    } else {
      await dispatch(
        reg({ createdBy, username, email, password, setToggleReg })
      );
    }
  };

  return (
    <RegWrapper>
      <RegInputWrapper>
        <Logo />
        <p>Register</p>
        <InputBox
          jobName="Username"
          typeName="text"
          inputName="username"
          inputValue={username}
          handleChange={handleRegChange}
        />
        <InputBox
          jobName="Email"
          typeName="text"
          inputName="email"
          inputValue={email}
          handleChange={handleRegChange}
        />
        <InputBox
          jobName="Password"
          typeName="password"
          inputName="password"
          inputValue={password}
          handleChange={handleRegChange}
        />
        <ButtonWrapper>
          <Button
            button="Submit"
            handleSubmit={handleRegSubmit}
            type="submit"
            allJobsBtn="reg__btn"
            allLoading={isLoading}
            allDisable={isDisable}
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

export default Reg;

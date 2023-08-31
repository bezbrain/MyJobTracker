import styled from "styled-components";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { PasswordIconProps } from "../../model";

const ToggleShowPassword = ({
  password,
  setShowPassword,
  showPassword,
}: PasswordIconProps) => {
  return (
    <>
      {password.length > 0 && (
        <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <MdOutlineVisibility
              size={"1.5em"}
              color={"#a68660"}
              title="Hide password"
            />
          ) : (
            <MdOutlineVisibilityOff
              size={"1.5em"}
              color={"#a68660"}
              title="Show password"
            />
          )}
        </PasswordIcon>
      )}
    </>
  );
};

export default ToggleShowPassword;

const PasswordIcon = styled.main`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  right: 10px;
  cursor: pointer;
`;

import { useState } from "react";
import Login from "../components/registeration/login";
import Reg from "../components/registeration/reg";

const Registration = () => {
  const [toggleReg, setToggleReg] = useState<boolean>(true);

  if (toggleReg) {
    return <Login setToggleReg={setToggleReg} />;
  }
  return <Reg setToggleReg={setToggleReg} />;
};

export default Registration;

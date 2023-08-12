import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { submitData } from "../../features/addJob/addJobSlice";

interface Props {
  button: string;
}

const Button: React.FC<Props> = ({ button }) => {
  const { addJobArr } = useSelector((store: RootState) => store.addJobStore);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(submitData());
  };

  return (
    <>
      <button onClick={handleSubmit}>{button}</button>
    </>
  );
};

export default Button;

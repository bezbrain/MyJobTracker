import { useDispatch, useSelector } from "react-redux";
import { submitData } from "../../features/addJob/addJobSlice";

interface Props {
  button: string;
}

const Button: React.FC<Props> = ({ button }) => {
  const { addJobArr } = useSelector((store: any) => store.addJobStore);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitData());
  };

  return (
    <>
      <button onClick={handleSubmit}>{button}</button>
    </>
  );
};

export default Button;

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { submitData } from "../../features/addJob/addJobSlice";
import { toast } from "react-toastify";

interface Props {
  button: string;
}

const Button: React.FC<Props> = ({ button }) => {
  const { inputs, isLoading } = useSelector(
    (store: RootState) => store.addJobStore
  );

  const { position, company, joblocation, status, jobType } = inputs;

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!position || !company || !joblocation || !status || !jobType) {
      toast.error("No field should be empty");
    } else {
      await dispatch(submitData(inputs));
    }
  };

  return (
    <>
      <button onClick={handleSubmit} disabled={isLoading}>
        {button}
      </button>
    </>
  );
};

export default Button;

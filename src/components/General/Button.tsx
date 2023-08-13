import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  button: string;
  handleSubmit: (e: React.FormEvent) => void;
  type: "button" | "reset" | "submit" | undefined;
}

const Button: React.FC<Props> = ({ button, handleSubmit, type }) => {
  const { isLoading } = useSelector((store: RootState) => store.addJobStore);

  return (
    <>
      <button onClick={(e) => handleSubmit(e)} disabled={isLoading} type={type}>
        {button}
      </button>
    </>
  );
};

export default Button;

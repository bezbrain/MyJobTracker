import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  button: string;
  handleSubmit: (e: React.FormEvent) => void;
  type: "button" | "reset" | "submit" | undefined;
  allJobsBtn?: string;
}

const Button: React.FC<Props> = ({
  button,
  handleSubmit,
  type,
  allJobsBtn,
}) => {
  const { isLoading } = useSelector((store: RootState) => store.addJobStore);
  const { btnContent } = useSelector((store: RootState) => store.editJobStore);

  return (
    <>
      <button
        onClick={(e) => handleSubmit(e)}
        disabled={isLoading}
        type={type}
        className={allJobsBtn}
      >
        {button === "Clear" ? "Clear" : btnContent}
      </button>
    </>
  );
};

export default Button;

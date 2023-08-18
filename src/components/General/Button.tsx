import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  button: string;
  handleSubmit: (e: React.FormEvent) => void;
  type: "button" | "reset" | "submit" | undefined;
  allJobsBtn?: string;
  // text?: React.RefObject<HTMLButtonElement> | null;
  // text?: string
}

const Button: React.FC<Props> = ({
  button,
  handleSubmit,
  type,
  allJobsBtn,
  // text,
}) => {
  const { isLoading } = useSelector((store: RootState) => store.addJobStore);
  const { btnContent } = useSelector((store: RootState) => store.editJobStore);

  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button
        onClick={(e) => handleSubmit(e)}
        disabled={isLoading}
        type={type}
        className={allJobsBtn}
        ref={btnRef}
      >
        {/* {button} */}
        {button === "Clear" ? "Clear" : btnContent}
      </button>
    </>
  );
};

export default Button;

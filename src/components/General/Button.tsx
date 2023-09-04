import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { BtnProps } from "../../model";

const Button: React.FC<BtnProps> = ({
  button,
  handleSubmit,
  type,
  allJobsBtn,
  allLoading,
  allDisable,
}) => {
  const { btnContent } = useSelector((store: RootState) => store.editJobStore);

  // Handle the content in button
  const handleBntContent = () => {
    if (button === "Clear") {
      return "Clear";
    }
    if (button !== "Clear") {
      if (allLoading) {
        return "Loading...";
      }
      return btnContent;
    }
  };

  return (
    <>
      <button
        onClick={(e) => handleSubmit(e)}
        disabled={allDisable}
        type={type}
        className={allJobsBtn}
      >
        {handleBntContent()}
      </button>
    </>
  );
};

export default Button;

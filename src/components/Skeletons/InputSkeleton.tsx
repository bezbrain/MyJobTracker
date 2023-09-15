import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddJobAllJobsProfile from "../../StylesWrappers/General/AddJobAllJobsProfile";
import InputWrapper from "../../StylesWrappers/General/inputBox";
import { InputSkeletonProps } from "../../model";

const InputSkeleton = ({ inputSkel }: InputSkeletonProps) => {
  return (
    <AddJobAllJobsProfile>
      <Skeleton width={150} height={45} style={{ marginBottom: "20px" }} />
      <InputWrapper>
        {Array(inputSkel)
          .fill(0)
          .map((each, i) => (
            <div className="name__and__input" key={i}>
              <div className="name">
                <Skeleton
                  height={25}
                  width={150}
                  style={{ marginBottom: "10px" }}
                />
              </div>
              <div className="input">
                <Skeleton height={35} />
              </div>
            </div>
          ))}
        {/* Skeleton for just button */}
        <div>
          <Skeleton height={35} style={{ marginTop: "40px" }} />
        </div>
      </InputWrapper>
    </AddJobAllJobsProfile>
  );
};

export default InputSkeleton;

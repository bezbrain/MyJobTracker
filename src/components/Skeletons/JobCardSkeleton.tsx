import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";

interface JobCardSkeletonProp {
  cards: number;
}

const JobCardSkeleton = ({ cards }: JobCardSkeletonProp) => {
  return (
    <AllJobsWrapper>
      {Array(cards)
        .fill(0)
        .map((each, i) => {
          return (
            <section className="single__job__card" key={i}>
              {/* Head of Job Card */}
              <div className="job__card__head">
                <Skeleton width={50} height={50} />
                <div className="job__and__company">
                  <p>
                    <Skeleton width={150} height={20} />
                  </p>
                  <p>
                    <Skeleton width={100} height={20} />
                  </p>
                </div>
              </div>
              <hr />

              {/* Body of Job Card */}
              <div className="location__and__date">
                <CardWrapper>
                  <Skeleton
                    width={30}
                    height={30}
                    style={{ marginRight: "10px" }}
                  />
                  <Skeleton width={100} height={30} />
                </CardWrapper>
                <CardWrapper>
                  <Skeleton
                    width={30}
                    height={30}
                    style={{ marginRight: "10px" }}
                  />
                  <Skeleton width={150} height={30} />
                </CardWrapper>
              </div>
              <div className="type__and__status">
                <CardWrapper>
                  <Skeleton
                    width={30}
                    height={30}
                    style={{ marginRight: "10px" }}
                  />
                  <Skeleton width={100} height={30} />
                </CardWrapper>
                <p>
                  <Skeleton width={150} height={30} />
                </p>
              </div>
              <CardWrapper>
                <Skeleton
                  width={100}
                  height={30}
                  style={{ marginRight: "10px" }}
                />
                <Skeleton width={100} height={30} />
              </CardWrapper>
            </section>
          );
        })}
    </AllJobsWrapper>
  );
};

export default JobCardSkeleton;

const CardWrapper = styled.div`
  display: flex;
`;

import Wrapper from "../../StylesWrappers/Stat/statCard";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { StatCardSkeletonProp } from "../../model";

const StatCardSkeleton = () => {
  return (
    <StatPageWrapper>
      <Wrapper>
        <section>
          <StatWrapper>
            <Skeleton width={50} height={50} />
            <Skeleton width={50} height={50} />
          </StatWrapper>
          <Skeleton width={200} height={30} style={{ marginTop: "50px" }} />
        </section>
      </Wrapper>
      <Wrapper>
        <section>
          <StatWrapper>
            <Skeleton width={50} height={50} />
            <Skeleton width={50} height={50} />
          </StatWrapper>
          <Skeleton width={200} height={30} style={{ marginTop: "50px" }} />
        </section>
      </Wrapper>
      <Wrapper>
        <section>
          <StatWrapper>
            <Skeleton width={50} height={50} />
            <Skeleton width={50} height={50} />
          </StatWrapper>
          <Skeleton width={200} height={30} style={{ marginTop: "50px" }} />
        </section>
      </Wrapper>
    </StatPageWrapper>
  );
};

export default StatCardSkeleton;

const StatPageWrapper = styled.main`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  margin: 2.5rem 4vw;
`;

// const Wrapper = styled.div`
// width: 100%;
// `

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

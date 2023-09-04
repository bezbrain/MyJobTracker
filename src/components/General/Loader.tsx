import styled from "styled-components";

interface LoaderProp {
  loaderStyle: string;
}

const Loader = ({ loaderStyle }: LoaderProp) => {
  return (
    <LoaderWrapper>
      <div className={`loader ${loaderStyle}`}></div>
    </LoaderWrapper>
  );
};

export default Loader;

const LoaderWrapper = styled.div`
  .varyingCSSProfile {
    top: 30%;
  }
  .varyingCSSAllJobs {
    top: 60vh;
  }

  .loader {
    position: absolute;
    right: 50%;
    border: 4px solid #9b9898;
    border-top: 4px solid #2785c4;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: loader 1s linear infinite;
    margin: 0 auto;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 730px) {
    .loader {
      right: 45%;
    }
  }
  @media screen and (max-width: 600px) {
    .varyingCSSAllJobs {
      top: 90vh;
    }
  }
`;

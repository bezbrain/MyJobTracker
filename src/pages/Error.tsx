import { Link } from "react-router-dom";
import styled from "styled-components";
import { errorImg } from "../assets/images/images";

const Error = () => {
  return (
    <ErrorWrapper>
      <img className="pulse" src={errorImg} alt="error-page" />
      <h3>Oops! Page does not exist</h3>
      <Link to="/dashboard">
        <button className="explore-btn error-btn">Go Home</button>
      </Link>
    </ErrorWrapper>
  );
};

export default Error;

const ErrorWrapper = styled.main`
  text-align: center;

  img {
    width: 40%;
    margin-block: 6rem 2vw;
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 500px;
    }
  }
  @media screen and (max-width: 600px) {
    img {
      width: 80vw;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .pulse {
    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  h3 {
    color: red;
    font-size: 20px;
  }

  .error-btn {
    background-color: var(--dark);
    border: none;
    width: 100px;
    padding-block: 10px;
    color: #fff;
    font-size: 16px;
    margin: 20px 10px;
    transition: ease 0.5s all;
    cursor: pointer;
  }

  .error-btn:hover {
    opacity: 0.8;
  }
`;

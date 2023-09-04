import styled from "styled-components";

const LandingWrapper = styled.main`
  max-width: 1300px;
  margin-inline: auto;
  padding: 2rem 4vw;

  > summary {
    min-height: 80vh;
    display: flex;
  }

  .logo__con {
    display: flex;
    align-items: center;
  }

  .landing__content__and__img {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .landing__content {
    width: 45%;
  }

  .landing__content > p:first-child {
    font-size: 2.8rem;
    font-weight: 600;
  }
  .landing__content > p:first-child span {
    color: var(--dark);
  }
  .landing__content > p:nth-child(2) {
    margin-block: 20px;
  }

  .landing__content button {
    background-color: var(--dark);
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .landing__img {
    width: 45%;
    height: 80%;
  }
  .landing__img img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 990px) {
    .landing__content {
      width: 80%;
    }
    .landing__img {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .landing__content {
      width: 95%;
    }
    .landing__content > p:first-child {
      font-size: 6.5vw;
    }
    .landing__content > p:nth-child(2) {
      margin-block: 10px;
    }
    .landing__content button {
      font-size: 16px;
      padding: 7px 15px;
    }
  }
`;

export default LandingWrapper;

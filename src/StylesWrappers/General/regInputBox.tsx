import styled from "styled-components";

const RegInputWrapper = styled.form`
  /* border: 2px solid red; */
  width: 400px;
  text-align: center;
  padding: 5vh 2rem;
  background-color: var(--verylight);
  box-shadow: 0px 0px 28px 9px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  > p {
    font-size: var(--header);
    margin-block: 20px;
  }

  > div p {
    margin-bottom: 10px;
    font-size: 20px;
    text-align: left;
  }
  @media screen and (max-width: 500px) {
    > p {
      font-size: 25px;
      margin-block: 10px;
    }

    > div p {
      font-size: 16px;
      margin-bottom: 5px;
    }
  }

  input {
    width: 100%;
    height: var(--input-height);
    padding-left: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-bottom: 2vh;
  }

  footer {
    margin-top: 10px;
  }

  footer span {
    color: var(--dark);
    font-weight: 700;
    cursor: pointer;
  }
`;

export default RegInputWrapper;

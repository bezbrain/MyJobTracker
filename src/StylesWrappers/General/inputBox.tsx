import styled from "styled-components";

const InputWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  > div p {
    margin-bottom: 10px;
    font-size: 20px;
  }

  input {
    width: 100%;
    height: var(--input-height);
    padding-left: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #000;
  }
`;

export default InputWrapper;

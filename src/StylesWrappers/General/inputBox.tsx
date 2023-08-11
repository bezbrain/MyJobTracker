import styled from "styled-components";

const InputWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  input {
    width: 100%;
    height: var(--input-height);
    padding-left: 10px;
  }
`;

export default InputWrapper;

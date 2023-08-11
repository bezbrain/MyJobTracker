import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    width: 48%;
    height: var(--input-height);
    /* gap: 15px; */
  }
`;

export default ButtonWrapper;

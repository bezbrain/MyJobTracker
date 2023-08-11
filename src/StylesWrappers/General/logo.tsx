import styled from "styled-components";

const Wrapper = styled.main`
  cursor: pointer;
  div p {
    font-size: var(--font);
    color: var(--dark);
    font-weight: 700;
  }

  @media screen and (max-width: 1000px) {
    div p {
      font-size: 4vw;
    }
  }
`;

export default Wrapper;

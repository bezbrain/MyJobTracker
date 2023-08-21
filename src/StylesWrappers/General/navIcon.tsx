import styled from "styled-components";

const Wrapper = styled.main`
  cursor: pointer;
  color: var(--dark);
  width: 50px;

  @media screen and (max-width: 1000px) {
    width: 5vw;
  }
  @media screen and (max-width: 500px) {
    width: 35px;
  }
`;

export default Wrapper;

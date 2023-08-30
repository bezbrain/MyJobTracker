import styled from "styled-components";

const Wrapper = styled.main`
  cursor: pointer;
  div img {
    width: 15vw;
  }
  .reg__logo {
    width: 150px;
  }

  @media screen and (min-width: 1200px) {
    div img {
      width: 200px;
    }
  }
  @media screen and (max-width: 1000px) {
    div img {
      width: 120px;
    }
  }
  @media screen and (max-width: 600px) {
    div img {
      width: 120px;
    }
  }
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: var(--page-side-space);

  .logo-and-icon {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    width: 25%;
  }
  @media screen and (max-width: 1100px) {
    .logo-and-icon {
      width: 35%;
    }
  }
  @media screen and (max-width: 500px) {
    .logo-and-icon {
      align-items: center;
      width: 200px;
    }
  }

  .header-text {
    /* border: 2px solid green; */
    width: 60%;
    text-align: center;
    font-size: var(--header);
    font-weight: 700;
  }
  @media screen and (max-width: 1000px) {
    .header-text {
      font-size: 4vw;
    }
  }

  .profile {
    /* border: 2px solid red; */
    width: 15%;
    text-align: center;
  }
`;

export default Wrapper;

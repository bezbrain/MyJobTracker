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
    /* align-items: center; */
    width: 25%;
  }

  .header-text {
    /* border: 2px solid green; */
    width: 60%;
    text-align: center;
    font-size: var(--header);
    /* font-weight: 700; */
  }

  .profile {
    /* border: 2px solid red; */
    width: 15%;
    text-align: center;
  }
`;

export default Wrapper;

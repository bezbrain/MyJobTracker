import styled from "styled-components";

const Wrapper = styled.main`
  width: 250px;

  nav {
    /* border: 2px solid red; */
    margin-top: 2rem;
  }

  nav ul li {
    list-style-type: none;
    margin-top: 30px;
    display: flex;
    cursor: pointer;
    /* align-items: center; */
  }

  nav ul li p:first-child {
    width: 30px;
  }

  nav ul li p:last-child {
    font-size: var(--font-lg);
    margin-left: 20px;
  }
`;

export default Wrapper;

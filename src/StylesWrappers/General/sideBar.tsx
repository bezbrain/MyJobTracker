import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    /* border: 2px solid red; */
    width: 300px;
    margin-top: 2rem;
    transition: ease 0.5s all;
  }
  .remove-nav {
    width: 0px;
  }
  @media screen and (max-width: 1100px) {
    nav {
      display: none;
    }
  }

  nav ul li {
    /* border: 2px solid red; */
    list-style-type: none;
    margin-top: 10px;
    display: flex;
    cursor: pointer;
    /* align-items: center; */
    padding: 15px 15px 15px 4vw;
    transition: ease 0.5s all;
  }
  .add-hover {
    background-color: var(--verylight);
    padding-left: 30px;
  }

  nav ul li p:first-child {
    width: 30px;
  }

  nav ul li p:last-child {
    font-size: var(--font-lg);
    margin-left: 20px;
  }

  /* Add active page */
  .add-color {
    color: var(--dark);
  }
  .add-color:active {
    transform: scale(0.5);
  }
`;

export default Wrapper;

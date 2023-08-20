import styled from "styled-components";

const Wrapper = styled.main`
  .nav-section {
    /* border: 2px solid red; */
    width: 300px;
    margin-top: 2rem;
    transition: ease 200ms all;
  }
  .remove-nav {
    margin-left: -300px;
  }
  .lg-screen-close-icon {
    display: none;
  }

  .small-nav-section {
    display: none;
  }
  .sm-screen-close-icon {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    .nav-section {
      /* display: none; */
      margin-left: -300px;
    }
    .small-nav-section {
      display: block;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh;
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .add-sm-nav {
      transform: scale(1);
      transition: ease 0.5s all;
    }
    .remove-sm-nav {
      transform: scale(0);
    }
    .small-nav-section ul {
      position: relative;
      background-color: #fff;
      width: 400px;
      padding-block: 4rem 2rem;
      border-radius: 5px;
    }
    .sm-screen-close-icon {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 2.2rem;
      color: red;
    }
  }

  @media screen and (max-width: 500px) {
    .small-nav-section ul {
      width: 300px;
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

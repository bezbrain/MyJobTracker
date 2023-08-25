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
      width: 40%;
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
      width: 40%;
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 500px) {
    .removeAtMobile {
      display: none;
    }
  }

  .profile {
    /* border: 2px solid red; */
    position: relative;
    width: fit-content;
  }

  .profile h3 {
    padding-inline: 10px;
    background-color: var(--dark);
    border-radius: 5px;
    color: #fff;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .profile button {
    position: absolute;
    right: 5px;
    width: fit-content;
    padding-inline: 10px;
    height: 35px;
    border: none;
    background-color: var(--light);
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: ease 0.5s all;
  }
  .profile button:hover,
  .profile h3:hover {
    opacity: 0.8;
  }
`;

export default Wrapper;

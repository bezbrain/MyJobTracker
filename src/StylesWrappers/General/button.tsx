import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    width: 48%;
    height: var(--input-height);
    font-size: 18px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    button {
      font-size: 16px;
    }
  }

  .reg__btn {
    width: 100%;
    margin-top: 10px;
  }

  button:first-child {
    background-color: var(--lightgreen);
    transition: ease 0.5s all;
  }
  button:first-child:hover {
    opacity: var(--opacity);
  }

  button:last-child {
    background-color: var(--dark);
    transition: ease 0.5s all;
  }
  button:last-child:hover {
    opacity: var(--opacity);
  }

  .add-allJobs-btn {
    background-color: #e0b3a6 !important;
    width: 100%;
    transition: ease 0.5s all;
  }
  .add-allJobs-btn:hover {
    background-color: var(--blackred) !important;
  }

  .add-search-btn {
    background-color: #a62f03 !important;
    width: 100%;
  }

  .add-profile-btn {
    background-color: #e0b3a6 !important;
    width: 100%;
    transition: ease 0.5s all;
  }
  .add-profile-btn:hover {
    background-color: var(--blackred) !important;
  }
`;

export default ButtonWrapper;

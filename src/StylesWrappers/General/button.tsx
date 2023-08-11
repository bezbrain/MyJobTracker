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
`;

export default ButtonWrapper;

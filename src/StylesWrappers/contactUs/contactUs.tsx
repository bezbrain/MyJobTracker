import styled from "styled-components";

const ContactWrapper = styled.main`
  background-color: #fff;
  margin: 2.5rem 4vw;
  padding: 5vh 3vw;
  border-radius: 5px;
  text-align: center;

  div {
    text-align: left;
    margin-top: 20px;
  }

  div p,
  .message-con label {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    div {
      margin-top: 10px;
    }

    div p,
    .message-con label {
      font-size: 16px;
    }
  }

  .name__email__con {
    display: flex;
    justify-content: space-between;
  }

  .name__email__con div {
    width: 49%;
  }

  @media screen and (max-width: 650px) {
    .name__email__con {
      flex-direction: column;
    }
    .name__email__con div {
      width: 100%;
    }
  }

  input,
  textarea {
    width: 100%;
    font-size: 18px;
    margin-top: 5px;
    border-radius: 5px;
  }

  input {
    height: 40px;
    padding-left: 10px;
    border: 1px solid #000;
  }

  textarea {
    padding: 10px;
  }

  button {
    background-color: var(--dark);
    height: 40px;
    border: none;
    color: #fff;
    font-size: 16px;
    width: 200px;
    margin-top: 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.8);
  }
  @media screen and (max-width: 500px) {
    button {
      margin-top: 10px;
      width: 180px;
    }
  }
`;

export default ContactWrapper;

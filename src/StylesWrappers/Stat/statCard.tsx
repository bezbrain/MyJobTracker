import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.1);

  section {
    border-radius: 5px;
    background-color: #fff;
    padding: 40px 20px;
  }
  @media screen and (max-width: 600px) {
    section {
      padding: 20px 8px;
    }
  }

  .add-pending-border {
    border-bottom: 6px solid var(--lightgreen);
  }
  .add-interview-border {
    border-bottom: 6px solid var(--dark);
  }
  .add-decline-border {
    border-bottom: 6px solid var(--blackred);
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .head p:first-child {
    font-size: 3.5rem;
    font-weight: 600;
  }

  .add-pending-count {
    color: var(--lightgreen);
  }
  .add-interview-count {
    color: var(--dark);
  }
  .add-decline-count {
    color: var(--blackred);
  }

  .head p:last-child {
    width: 50px;
  }
  .add-pending-icon {
    color: var(--lightgreen);
    margin-top: 8px;
  }
  .add-interview-icon {
    color: var(--dark);
    margin-top: 8px;
  }
  .add-decline-icon {
    color: var(--blackred);
    margin-top: 8px;
  }

  section > p {
    font-size: var(--header-md);
    font-weight: 600;
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    section > p {
      font-size: var(--header-sm);
      margin-top: 20px;
    }
  }
`;

export default Wrapper;

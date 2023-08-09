import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;

  section {
    /* border: 2px solid red; */
    border-radius: 5px;
    background-color: #fff;
    padding: 40px 20px;
  }

  .add-pending-border {
    border-bottom: 4px solid var(--lightgreen);
  }
  .add-interview-border {
    border-bottom: 4px solid var(--dark);
  }
  .add-decline-border {
    border-bottom: 4px solid var(--blackred);
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .head p:first-child {
    font-size: 4rem;
  }

  .head p:last-child {
    width: 30px;
  }
`;

export default Wrapper;

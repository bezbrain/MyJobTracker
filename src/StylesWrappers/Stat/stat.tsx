import styled from "styled-components";

const Wrapper = styled.main`
  .card-con {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 2.5rem 4vw;
  }
`;

export default Wrapper;

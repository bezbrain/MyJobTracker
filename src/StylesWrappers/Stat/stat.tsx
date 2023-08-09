import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
  padding: 2.5rem 4vw;
  background-color: var(--verylight);
  /* height: 90vh; */
`;

export default Wrapper;

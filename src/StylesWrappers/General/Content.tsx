import styled from "styled-components";

const Content = styled.main`
  position: relative; // This is to make sure the loader is relative to this container
  min-height: 90vh;
  background-color: var(--verylight);
  width: 100%;
  border-top: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
`;

export default Content;

import styled from "styled-components";

const SelectWrapper = styled.section`
  > p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  select {
    width: 100%;
    height: var(--input-height);
    border-radius: 5px;
    padding-inline: 10px;
    font-size: 18px;
  }
`;

export default SelectWrapper;

import styled from "styled-components";

const SelectWrapper = styled.section`
  > p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    > p {
      font-size: 16px;
    }
  }

  select {
    width: 100%;
    height: var(--input-height);
    border-radius: 5px;
    padding-inline: 10px;
    font-size: 18px;
    cursor: pointer;
  }

  select option:first-child {
    color: #000;
  }
`;

export default SelectWrapper;

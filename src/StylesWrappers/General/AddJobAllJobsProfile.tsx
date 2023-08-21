import styled from "styled-components";

const AddJobAllJobsProfile = styled.main`
  background-color: #fff;
  margin: 2.5rem 4vw;
  padding: 5vh 3vw;
  border-radius: 5px;

  > p {
    font-size: var(--header);
    margin-bottom: 3vh;
  }

  @media screen and (max-width: 500px) {
    padding-block: 20px;

    > p {
      margin-bottom: 10px;
    }
  }
`;

export default AddJobAllJobsProfile;

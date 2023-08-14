import styled from "styled-components";

const AllJobsWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 2.5rem 4vw;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  section {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.1);
  }

  .job__card__head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .company__first__letter {
    background-color: var(--dark);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  .company__first__letter p {
    color: #fff;
    font-size: var(--font);
  }

  .job__and__company {
    margin-left: 25px;
  }
  .job__and__company p:first-child {
    font-size: 25px;
    font-weight: 600;
  }
  .job__and__company p:last-child {
    font-size: 20px;
    opacity: var(--opacity);
  }

  .location__and__date {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .location__and__date p {
    font-size: 20px;
    opacity: var(--opacity);
  }

  .location__and__date p span {
    opacity: var(--opacity);
    font-size: 16px;
    margin-right: 10px;
  }

  .type__and__status {
    margin-top: 15px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
  .type__and__status p {
    font-size: 20px;
    opacity: var(--opacity);
  }

  .type__and__status p span {
    opacity: var(--opacity);
    font-size: 16px;
    margin-right: 10px;
  }

  .type__and__status p:last-child {
    margin-left: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #4b3838;
  }
  /* Add status color */
  .addInterviewColor {
    background-color: var(--InterviewColor);
  }
  .addPendingColor {
    background-color: var(--pendingColor);
  }
  .addDelineColor {
    background-color: var(--DeclineColor);
  }

  .buttons {
    margin-top: 30px;
  }

  .buttons button {
    font-size: 16px;
    padding: 5px 15px;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  .buttons button:first-child {
    background-color: var(--lightgreen);
  }
  .buttons button:last-child {
    background-color: var(--blackred);
    margin-inline: 10px;
  }
`;

export default AllJobsWrapper;

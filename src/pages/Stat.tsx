import { useState, useEffect } from "react";
import Wrapper from "../StylesWrappers/Stat/stat";
import StatCard from "../components/Stats/StatCard";
import { PendingIcon, InterviewIcon, DeclineIcon } from "../icons/icons";
import { DocumentData } from "firebase/firestore";
import { getData } from "../DBSnapShot";

const Stat = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);

  useEffect(() => {
    getData(setDataInDB);
  }, []);

  // Get each status
  const getPending = dataInDB.filter((each) => each.status === "Pending");
  const getInterview = dataInDB.filter((each) => each.status === "Interview");
  const getDecline = dataInDB.filter((each) => each.status === "Declined");

  return (
    <Wrapper>
      <section className="card-con">
        <StatCard
          count={getPending.length}
          icon={<PendingIcon />}
          jobText="Pending Applications"
          border="add-pending-border"
          countColor="add-pending-count"
          iconColor="add-pending-icon"
        />
        <StatCard
          count={getInterview.length}
          icon={<InterviewIcon />}
          jobText="Interviews Scheduled"
          border="add-interview-border"
          countColor="add-interview-count"
          iconColor="add-interview-icon"
        />
        <StatCard
          count={getDecline.length}
          icon={<DeclineIcon />}
          jobText="Jobs Declined"
          border="add-decline-border"
          countColor="add-decline-count"
          iconColor="add-decline-icon"
        />
      </section>
    </Wrapper>
  );
};

export default Stat;

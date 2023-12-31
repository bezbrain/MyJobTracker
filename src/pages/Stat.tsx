import { useState, useEffect } from "react";
import Wrapper from "../StylesWrappers/Stat/stat";
import StatCard from "../components/Stats/StatCard";
import { PendingIcon, InterviewIcon, DeclineIcon } from "../assets/icons/icons";
import { DocumentData } from "firebase/firestore";
import { getData, useUniqueUserData } from "../DBSnapShot";
import TitleText from "../components/General/Helmet";
import StatCardSkeleton from "../components/Skeletons/StatCardSkeleton";

const Stat = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);

  useEffect(() => {
    getData(setDataInDB); // Set data from DB into an array
  }, []);

  // Call the function to handle dispaly of stat count related to certain user
  const uniqueUserData: DocumentData[] = useUniqueUserData(dataInDB);

  // Get each stat count
  const getPending = uniqueUserData.filter((each) => each.status === "Pending");

  const getInterview = uniqueUserData.filter(
    (each) => each.status === "Interview"
  );

  const getDecline = uniqueUserData.filter(
    (each) => each.status === "Declined"
  );

  if (dataInDB.length === 0) {
    return <StatCardSkeleton />;
  }

  return (
    <Wrapper>
      <TitleText title="Jobtrackier - Stat" />
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

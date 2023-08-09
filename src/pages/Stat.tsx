import Wrapper from "../StylesWrappers/Stat/stat";
import StatCard from "../components/Stats/StatCard";
import { PendingIcon, InterviewIcon, DeclineIcon } from "../icons/icons";

const Stat = () => {
  return (
    <Wrapper>
      <StatCard
        count={0}
        icon={<PendingIcon />}
        jobText="Pending Applications"
        border="add-pending-border"
        countColor="add-pending-count"
        iconColor="add-pending-icon"
      />
      <StatCard
        count={0}
        icon={<InterviewIcon />}
        jobText="Interviews Scheduled"
        border="add-interview-border"
        countColor="add-interview-count"
        iconColor="add-interview-icon"
      />
      <StatCard
        count={0}
        icon={<DeclineIcon />}
        jobText="Jobs Declined"
        border="add-decline-border"
        countColor="add-decline-count"
        iconColor="add-decline-icon"
      />
    </Wrapper>
  );
};

export default Stat;

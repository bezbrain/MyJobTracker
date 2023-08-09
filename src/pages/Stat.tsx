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
      />
      <StatCard
        count={0}
        icon={<InterviewIcon />}
        jobText="Interviews Scheduled"
        border="add-interview-border"
      />
      <StatCard
        count={0}
        icon={<DeclineIcon />}
        jobText="Jobs Declined"
        border="add-decline-border"
      />
    </Wrapper>
  );
};

export default Stat;

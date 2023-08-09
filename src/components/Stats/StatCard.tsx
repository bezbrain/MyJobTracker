import Wrapper from "../../StylesWrappers/Stat/statCard";
import { PendingIcon } from "../../icons/icons";

interface Props {
  count: number;
  icon: any;
  jobText: string;
  border: string;
}

const StatCard: React.FC<Props> = ({ count, icon, jobText, border }) => {
  return (
    <Wrapper>
      <section className={`${border}`}>
        <div className="head">
          <p>{count}</p>
          <p>{icon}</p>
        </div>
        <p>{jobText}</p>
      </section>
    </Wrapper>
  );
};

export default StatCard;
